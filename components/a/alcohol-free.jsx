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
		"content": `<style>.mln3accao {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3.107V3h10v4q0 .291-.034.58q-.034.29-.101.573t-.167.557t-.23.534t-.291.504q-.16.243-.347.466t-.399.423t-.445.374M12 15.9v4.6m-3.5 0h7m-12-17l17 17");
}
</style><path class="mln3accao"/>`,
		"fallback": "uix:alcohol-free",
	});
}

export default Component;
