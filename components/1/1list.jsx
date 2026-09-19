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
		"content": `<style>.zkn8do8wl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.14 34.07a2.64 2.64 0 1 1 2.64-2.64a2.64 2.64 0 0 1-2.64 2.64m0-7.43A2.65 2.65 0 1 1 9.78 24a2.65 2.65 0 0 1-2.64 2.65Zm0-7.43a2.64 2.64 0 1 1 2.64-2.64a2.64 2.64 0 0 1-2.64 2.64m5.61 12.17H43.5m-30.74-7.43h19.57m-19.58-7.43h9.01");
}
</style><path class="zkn8do8wl"/>`,
		"fallback": "arcticons:1list",
	});
}

export default Component;
