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
		"content": `<style>.emu_11-1o {
  fill: none;
  stroke: currentColor;
  d: path("M10.01 43.07L9.705 5.841a1.056 1.056 0 0 1 1.046-1.065L37.42 4.5a.867.867 0 0 1 .86 1.025l-1.774 9.496a1.27 1.27 0 0 1-1.247 1.036H22.904a1.185 1.185 0 0 0-1.177 1.047l-.193 1.648a.94.94 0 0 0 .822 1.04a1 1 0 0 0 .109.007h11.996a.846.846 0 0 1 .825 1.028l-2.02 9.088a1.314 1.314 0 0 1-1.282 1.029h-8.078a2.5 2.5 0 0 0-1.79.755l-11.362 11.67a.433.433 0 0 1-.744-.299Z");
}
</style><path class="emu_11-1o"/>`,
		"fallback": "arcticons:foursquare",
	});
}

export default Component;
