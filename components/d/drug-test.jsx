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
		"content": `<style>.rgu8q6bpy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 3h6m-5 0v4m4-4v4m-4 0v10a2 2 0 0 0 4 0V7m-4 5h4");
}
</style><path class="rgu8q6bpy"/>`,
		"fallback": "uix:drug-test",
	});
}

export default Component;
