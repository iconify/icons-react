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
		"content": `<style>.m8ef4abgi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.386 19.5H3l9-15l6.126 10.21M12 12v5.9m0 .2v1.4m2.75-1.5l2 2L21 15.75");
}
</style><path class="m8ef4abgi"/>`,
		"fallback": "uix:camping-allowed",
	});
}

export default Component;
