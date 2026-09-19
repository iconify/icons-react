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
		"content": `<style>.wq9y73b8o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.385 7.525A27.58 27.58 0 0 0 15.923 24A27.58 27.58 0 0 0 24 43.5m0-39A27.58 27.58 0 0 1 32.077 24a27.58 27.58 0 0 1-5.462 16.475");
}
</style><path class="wq9y73b8o"/>`,
		"fallback": "arcticons:alsalam-bank",
	});
}

export default Component;
