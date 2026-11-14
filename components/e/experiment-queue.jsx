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
		"content": `<style>.x71yrbcsx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 4.5za1 1 0 0 1 1 1v3.367a1.5 1.5 0 0 0 .023.264l.912 5.105A1.5 1.5 0 0 1 5.208 16h-.916a1.5 1.5 0 0 1-1.477-1.764l.912-5.105a1.5 1.5 0 0 0 .023-.264V5.5a1 1 0 0 1 1-1m7.25 0za1 1 0 0 1 1 1v3.367a1.5 1.5 0 0 0 .023.264l.912 5.105A1.5 1.5 0 0 1 12.458 16h-.916a1.5 1.5 0 0 1-1.477-1.764l.912-5.105A1.5 1.5 0 0 0 11 8.867V5.5a1 1 0 0 1 1-1m7.25 0za1 1 0 0 1 1 1v3.367a1.5 1.5 0 0 0 .023.264l.912 5.105A1.5 1.5 0 0 1 19.708 16h-.916a1.5 1.5 0 0 1-1.477-1.764l.912-5.105a1.5 1.5 0 0 0 .023-.264V5.5a1 1 0 0 1 1-1M2.5 19.5h19");
}
</style><path class="x71yrbcsx"/>`,
		"fallback": "uix:experiment-queue",
	});
}

export default Component;
