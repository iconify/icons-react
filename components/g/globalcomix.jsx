import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dbfkwb0jl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.296 16.397a10.75 10.75 0 1 0 3.149 7.601h-6.75");
}

.p1qih9ryb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.202 39.203c-8.396 8.396-22.009 8.396-30.405 0s-8.396-22.01 0-30.406s22.01-8.396 30.405 0");
}
</style><path class="p1qih9ryb"/><path class="dbfkwb0jl"/>`,
		"fallback": "arcticons:globalcomix",
	});
}

export default Component;
