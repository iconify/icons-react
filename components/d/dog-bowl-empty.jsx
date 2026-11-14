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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qrxxeacvm {
  d: path("M3 8.5L5.25 17q.5 1.5 2 1.5h9.5q1.5 0 2-1.5L21 8.5");
}

.sq137tf4g {
  d: path("M3 8.5a9 2.5 0 1 0 18 0a9 2.5 0 1 0-18 0");
}
</style><g class="hntgybcog"><path class="sq137tf4g"/><path class="qrxxeacvm"/></g>`,
		"fallback": "uix:dog-bowl-empty",
	});
}

export default Component;
