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
		"content": `<style>.z-1aw6bmx {
  fill: currentColor;
  d: path("M88 196a12 12 0 1 1-12-12a12 12 0 0 1 12 12m28 4a12 12 0 1 0 12 12a12 12 0 0 0-12-12m48-16a12 12 0 1 0 12 12a12 12 0 0 0-12-12m-96 40a12 12 0 1 0 12 12a12 12 0 0 0-12-12m88 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12m75.87-136.45a76 76 0 0 0-151.78.73A8.18 8.18 0 0 1 72 96h-.6a8.14 8.14 0 0 1-7.4-8.61a92.5 92.5 0 0 1 2.33-16.51a4 4 0 0 0-5-4.78A52.09 52.09 0 0 0 24 116.36C24.2 145.07 48.12 168 76.84 168H156a76.08 76.08 0 0 0 75.87-80.45");
}
</style><path class="z-1aw6bmx"/>`,
		"fallback": "ph:cloud-snow-fill",
	});
}

export default Component;
