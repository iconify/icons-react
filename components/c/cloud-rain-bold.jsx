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
		"content": `<style>.a0jup-pcx {
  fill: currentColor;
  d: path("M156 12a80.22 80.22 0 0 0-73.61 48.36A57 57 0 0 0 76 60a56 56 0 0 0 0 112h29.58L86 201.34a12 12 0 1 0 20 13.32L134.42 172H156a80 80 0 0 0 0-160m0 136H76a32 32 0 0 1 0-64h.28c-.11 1.1-.2 2.2-.26 3.3a12 12 0 1 0 24 1.39A56.06 56.06 0 1 1 156 148m.65 58.66l-26.67 40a12 12 0 1 1-20-13.32l26.66-40a12 12 0 1 1 20 13.32Z");
}
</style><path class="a0jup-pcx"/>`,
		"fallback": "ph:cloud-rain-bold",
	});
}

export default Component;
