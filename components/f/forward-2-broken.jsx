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
		"content": `<style>.yu604iz0n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.5 7L19.5 12L14.5 17M19.5 12L13 12M9.5 12C7.83333 12 4.5 11 4.5 7");
}
</style><path class="yu604iz0n"/>`,
		"fallback": "solar:forward-2-broken",
	});
}

export default Component;
