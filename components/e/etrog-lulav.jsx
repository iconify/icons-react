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
		"content": `<style>.jl9lb2bou {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 2.5v19m-3-17L7 14l3-9.5M11.5 16a4.5 5 0 1 0 9 0a4.5 5 0 1 0-9 0m-6 1.5h3M16 11V8.75m0 1c1-1.75 2.5-2.25 4-2c-.5 1.5-2 2.25-4 2");
}
</style><path class="jl9lb2bou"/>`,
		"fallback": "uix:etrog-lulav",
	});
}

export default Component;
