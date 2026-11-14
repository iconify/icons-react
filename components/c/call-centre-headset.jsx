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
		"content": `<style>.eykhj5x6m {
  d: path("M3.25 12h3.5v6h-3.5Zm14 0h3.5v6h-3.5ZM5 18q0 3.5 4.5 3.5H12");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w9elh_16j {
  d: path("M5 13v-2a7 7 0 0 1 14 0v2");
}
</style><g class="ulnmmdpxh"><path class="w9elh_16j"/><path class="eykhj5x6m"/></g>`,
		"fallback": "uix-sharp:call-centre-headset",
	});
}

export default Component;
