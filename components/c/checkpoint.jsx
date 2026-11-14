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
		"content": `<style>.ynxd114bt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 2.5v19m-3.5 0h7M10.052 3.812l6.425 2.543a1.5 1.5 0 0 1 0 2.79l-6.425 2.543A1.5 1.5 0 0 1 8 10.293V5.207a1.5 1.5 0 0 1 2.052-1.395");
}
</style><path class="ynxd114bt"/>`,
		"fallback": "uix:checkpoint",
	});
}

export default Component;
