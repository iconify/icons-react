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
		"content": `<style>.lvyjnybpy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 11a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0M10 2.5v5m0 7v7m8-6.5v6m-3-3h6");
}
</style><path class="lvyjnybpy"/>`,
		"fallback": "uix:git-init",
	});
}

export default Component;
