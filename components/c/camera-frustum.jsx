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
		"content": `<style>.mne5-rbei {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 9h.75A2.625 2.625 0 0 1 8.5 11.625v.75A2.625 2.625 0 0 1 5.875 15h-.75A2.625 2.625 0 0 1 2.5 12.375v-.75A2.625 2.625 0 0 1 5.125 9M17.5 3l4 3v15l-4-3Zm-9 7.5l9-7.5m-9 10.5l9 4.5");
}
</style><path class="mne5-rbei"/>`,
		"fallback": "uix:camera-frustum",
	});
}

export default Component;
