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
		"content": `<style>.zt0fztbtk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 3h2q2 2 4 0h2l-1 7.5c3 1.5 5.5 5.5 6 10H3c.5-4.5 3-8.5 6-10Zm1 7.5h6l-3 7.25Z");
}
</style><path class="zt0fztbtk"/>`,
		"fallback": "uix:dirndl-style-dress",
	});
}

export default Component;
