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
		"content": `<style>.fdov0ybnz {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 2L3 21L22 21M19 7C17.9091 9.8125 13.9818 15.55 7 16");
}
</style><path class="fdov0ybnz"/>`,
		"fallback": "keyline-icons:chart-line-increasing-sharp",
	});
}

export default Component;
