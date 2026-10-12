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
		"content": `<style>.mex6eacmf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M21 7L3 7M7 11L3 7L7 3M3 17L21 17M17 13L21 17L17 21");
}
</style><path class="mex6eacmf"/>`,
		"fallback": "keyline-icons:arrow-left-right-fill",
	});
}

export default Component;
