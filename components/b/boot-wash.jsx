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
		"content": `<style>.d4nbvhbox {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.1 20H4v-3c0-2 1-2.75 3-3.25L13 12V3h6v8.2M13 6h6m-.5 8c-1 1.5-2.75 3.25-2.75 4.75a2.75 2.75 0 0 0 5.5 0c0-1.5-1.75-3.25-2.75-4.75");
}
</style><path class="d4nbvhbox"/>`,
		"fallback": "uix:boot-wash",
	});
}

export default Component;
