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
		"content": `<style>.innqzf23k {
  fill: currentColor;
  d: path("M210.35 129.36c-.81-.47-1.7-.92-2.62-1.36c.92-.44 1.81-.89 2.62-1.36a40 40 0 1 0-40-69.28c-.81.47-1.65 1-2.48 1.59c.08-1 .13-2 .13-3a40 40 0 0 0-80 0c0 .94 0 1.94.13 3c-.83-.57-1.67-1.12-2.48-1.59a40 40 0 1 0-40 69.28c.81.47 1.7.92 2.62 1.36c-.92.44-1.81.89-2.62 1.36a40 40 0 1 0 40 69.28c.81-.47 1.65-1 2.48-1.59c-.08 1-.13 2-.13 2.95a40 40 0 0 0 80 0c0-.94-.05-1.94-.13-2.95c.83.57 1.67 1.12 2.48 1.59a39.8 39.8 0 0 0 19.94 5.36a40.4 40.4 0 0 0 10.42-1.38a40 40 0 0 0 9.64-73.28ZM128 156a28 28 0 1 1 28-28a28 28 0 0 1-28 28");
}
</style><path class="innqzf23k"/>`,
		"fallback": "ph:flower-fill",
	});
}

export default Component;
