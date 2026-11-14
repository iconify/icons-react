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
		"content": `<style>.c0a9jmbzh {
  d: path("M11.5 9H15a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-3.5m4.5-4.5h4.5l1 1v2h-1.25l-.75 1.25l-.75-1.25H18l-.75 1.25l-.75-1.25H16m-7-3q-.375-.75-1.5-.75c-.75 0-1.5.5-1.5 1.25c0 1.5 3 .75 3 2.25c0 .5-.75 1-1.5 1q-1.125 0-1.5-.75");
}

.gutm8acqz {
  d: path("M2.5 12a5 5 0 1 0 10 0a5 5 0 1 0-10 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="gutm8acqz"/><path class="c0a9jmbzh"/></g>`,
		"fallback": "uix:car-allowance",
	});
}

export default Component;
