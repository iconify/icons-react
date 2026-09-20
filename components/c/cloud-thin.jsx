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
		"content": `<style>.i8d7t6bri {
  fill: currentColor;
  d: path("M160 44a84.11 84.11 0 0 0-76.41 49.12A60.7 60.7 0 0 0 72 92a60 60 0 0 0 0 120h88a84 84 0 0 0 0-168m0 160H72a52 52 0 1 1 8.55-103.3A83.7 83.7 0 0 0 76 128a4 4 0 0 0 8 0a76 76 0 1 1 76 76");
}
</style><path class="i8d7t6bri"/>`,
		"fallback": "ph:cloud-thin",
	});
}

export default Component;
