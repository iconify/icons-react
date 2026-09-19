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
		"content": `<style>.up6rybbgt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.163 4.5v31.2c0 5.426 4.821 7.22 9.75 7.8V16.875h5.85V43.5c5.106-.284 10.075-1.953 10.075-7.8V4.5H26.762v8.775h-5.85V4.5Z");
}
</style><path class="up6rybbgt"/>`,
		"fallback": "arcticons:hyvee",
	});
}

export default Component;
