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
		"content": `<style>.a13h9ub_o {
  d: path("m7 10l2.5 2.5l5-5m1.5 8.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-1.75 6c0-1.75 1.75-3 3.75-3s3.75 1.25 3.75 3");
}

.ctvdtnixv {
  d: path("M11.6 20.5H3.5v-18H19V11");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ctvdtnixv"/><path class="a13h9ub_o"/></g>`,
		"fallback": "uix-sharp:fact-check-user",
	});
}

export default Component;
