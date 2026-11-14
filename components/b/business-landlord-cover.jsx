import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tk-vu-uxp {
  d: path("M12 21.5H4v-19h10.5v13m-7-9h.01m3.49 0h.01m-3.51 4h.01m3.49 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zz4txqmhp {
  d: path("M7.75 21.5v-4h3v4m3.75-1.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm3-1.25l3.75-3.75m-1.5 1.5l1.5 1.5");
}
</style><g class="ulnmmdpxh"><path class="tk-vu-uxp"/><path class="zz4txqmhp"/></g>`,
		"fallback": "uix-sharp:business-landlord-cover",
	});
}

export default Component;
