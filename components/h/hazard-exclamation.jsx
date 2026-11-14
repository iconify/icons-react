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
		"content": `<style>.rbdejfbyv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.707 3.207l8.086 8.086a1 1 0 0 1 0 1.414l-8.086 8.086a1 1 0 0 1-1.414 0l-8.086-8.086a1 1 0 0 1 0-1.414l8.086-8.086a1 1 0 0 1 1.414 0ZM12 7.5v5.25m0 3.5h.01");
}
</style><path class="rbdejfbyv"/>`,
		"fallback": "uix-sharp:hazard-exclamation",
	});
}

export default Component;
