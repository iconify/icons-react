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
		"content": `<style>.t501rxv4f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5H12a3.5 3.5 0 0 1 3.5 3.5V9m-8-6.75V5M5 2.25h5m5.5 9.5v3M12 17.5h7a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2a2 2 0 0 1 2-2");
}
</style><path class="t501rxv4f"/>`,
		"fallback": "uix:hand-washing-kids",
	});
}

export default Component;
