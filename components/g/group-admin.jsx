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
		"content": `<style>.ijvd-6bcq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 6V4.682a.749.749 0 0 1 1.25-.557l.141.127a1.5 1.5 0 0 0 2.113-.106l.386-.425a1.5 1.5 0 0 1 2.22 0l.386.425a1.5 1.5 0 0 0 2.113.106l.141-.127a.749.749 0 0 1 1.25.557V6a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 7 6m-2 7a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m9 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M3 21.5c0-2 2-3.25 4.5-3.25S12 19.5 12 21.5m0 0c0-2 2-3.25 4.5-3.25S21 19.5 21 21.5");
}
</style><path class="ijvd-6bcq"/>`,
		"fallback": "uix:group-admin",
	});
}

export default Component;
