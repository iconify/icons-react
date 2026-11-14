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
		"content": `<style>.dzcnh_b6o {
  d: path("M8.5 6a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0ZM12 4.75v2.5");
}

.jd3k6i3ga {
  d: path("M2.5 9L4 12.5v9h16v-9L21.5 9M4 12.5h16");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jd3k6i3ga"/><path class="dzcnh_b6o"/></g>`,
		"fallback": "uix-sharp:capex",
	});
}

export default Component;
