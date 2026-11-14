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
		"content": `<style>.n2loanb-l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 9.5V13l-5 8h14l-5-8V9.5M7.5 17h9M12 2.5v3.25M7 4l1.5 2M17 4l-1.5 2");
}
</style><path class="n2loanb-l"/>`,
		"fallback": "uix:fluorescence",
	});
}

export default Component;
