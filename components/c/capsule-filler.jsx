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
		"content": `<style>.appxo8bmz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.956 2.5h8.088a1.75 1.75 0 0 1 1.19 3.032l-3.175 2.949a1.75 1.75 0 0 0-.559 1.282v.487a1.25 1.25 0 0 1-1.25 1.25h-.5a1.25 1.25 0 0 1-1.25-1.25v-.487a1.75 1.75 0 0 0-.559-1.282L6.766 5.532A1.75 1.75 0 0 1 7.956 2.5m.544 12V18a3.5 3.5 0 0 0 7 0v-3.5");
}
</style><path class="appxo8bmz"/>`,
		"fallback": "uix:capsule-filler",
	});
}

export default Component;
