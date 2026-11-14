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
		"content": `<style>.mkr3514rf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 21.5V15h15v6.5M12.75 3.75l.388.905a1.5 1.5 0 0 0 1.279.906l.979.065A.79.79 0 0 1 15.875 7l-.747.679a1.5 1.5 0 0 0-.461 1.404l.209 1.046a.831.831 0 0 1-1.251.871l-.839-.516a1.5 1.5 0 0 0-1.572 0l-.839.516a.831.831 0 0 1-1.251-.871l.209-1.046a1.5 1.5 0 0 0-.461-1.404L8.125 7a.79.79 0 0 1 .479-1.374l.979-.065a1.5 1.5 0 0 0 1.279-.906l.388-.905a.816.816 0 0 1 1.5 0M9 18.25h6");
}
</style><path class="mkr3514rf"/>`,
		"fallback": "uix:game-show",
	});
}

export default Component;
