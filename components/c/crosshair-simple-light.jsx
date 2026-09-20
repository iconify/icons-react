import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hkr-drb5h {
  fill: currentColor;
  d: path("M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m6 191.8V184a6 6 0 0 0-12 0v33.8A90.15 90.15 0 0 1 38.2 134H72a6 6 0 0 0 0-12H38.2A90.15 90.15 0 0 1 122 38.2V72a6 6 0 0 0 12 0V38.2a90.15 90.15 0 0 1 83.8 83.8H184a6 6 0 0 0 0 12h33.8a90.15 90.15 0 0 1-83.8 83.8");
}
</style><path class="hkr-drb5h"/>`,
		"fallback": "ph:crosshair-simple-light",
	});
}

export default Component;
