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
		"content": `<style>.na8pc_ksa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 7L17 17L12 22L12 2L17 7L7 17M21.1652 8C21.7158 9.2617 22 10.6234 22 12C22 13.3766 21.7158 14.7383 21.1652 16M2.8348 8C2.2842 9.2617 2 10.6234 2 12C2 13.3766 2.2842 14.7383 2.8348 16");
}
</style><path class="na8pc_ksa"/>`,
		"fallback": "keyline-icons:bluetooth-searching",
	});
}

export default Component;
