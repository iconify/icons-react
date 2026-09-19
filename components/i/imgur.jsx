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
		"content": `<style>.d1pvsq31z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 4.5a5.58 5.58 0 0 1 5.58 5.58h0A5.58 5.58 0 0 1 24 15.66h0a5.58 5.58 0 0 1-5.58-5.58h0A5.58 5.58 0 0 1 24 4.5m0 15.13a5.79 5.79 0 0 1 5.58 6v11.86a5.79 5.79 0 0 1-5.58 6a5.79 5.79 0 0 1-5.58-6V25.64A5.79 5.79 0 0 1 24 19.63");
}
</style><path class="d1pvsq31z"/>`,
		"fallback": "arcticons:imgur",
	});
}

export default Component;
