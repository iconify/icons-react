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
		"content": `<style>.h3a69bb8e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 3h6v7.5H9Zm-6.5.5L6.75 5v6L2.5 12.5Zm19 0L17.25 5v6l4.25 1.5ZM2.5 17h19M9 14h6");
}
</style><path class="h3a69bb8e"/>`,
		"fallback": "uix:control-room",
	});
}

export default Component;
