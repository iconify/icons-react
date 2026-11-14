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
		"content": `<style>.arnb0mekb {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.752 4.752Q1.75 7.754 1.75 12t3.002 7.248T12 22.25t7.248-3.002T22.25 12t-3.002-7.248T12 1.75T4.752 4.752m5.507 9.554l-1.334-1.631q-.902-1.102-.292-2.389Q9.241 9 10.665 9h2.67q1.424 0 2.033 1.286q.61 1.287-.292 2.389l-1.335 1.631q-.675.825-1.741.825t-1.741-.825");
}
</style><path class="arnb0mekb"/>`,
		"fallback": "uix-solid:caret-down-circle",
	});
}

export default Component;
