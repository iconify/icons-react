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
		"content": `<style>.g2-88uekx {
  d: path("M5.5 2.5zA1.5 1.5 0 0 1 7 4v16a1.5 1.5 0 0 1-1.5 1.5A1.5 1.5 0 0 1 4 20V4a1.5 1.5 0 0 1 1.5-1.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x3-qoht1o {
  d: path("M5.5 3.5h12A1.5 1.5 0 0 1 19 5a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 4 5a1.5 1.5 0 0 1 1.5-1.5m0 12.5h10a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 4 17.5A1.5 1.5 0 0 1 5.5 16M15 9.5v12m-2-12h4");
}
</style><g class="hntgybcog"><path class="g2-88uekx"/><path class="x3-qoht1o"/></g>`,
		"fallback": "uix:bar-clamp",
	});
}

export default Component;
