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
		"content": `<style>.xlkukn9kx {
  fill: currentColor;
  d: path("M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m50.28 40.75L60.75 178.28a85 85 0 0 1-8.36-13.7L164.58 52.39a85 85 0 0 1 13.7 8.36m17 17a85 85 0 0 1 8.36 13.7L91.42 203.61a85 85 0 0 1-13.7-8.36ZM128 44a85 85 0 0 1 10.37.66l-93.71 93.71A83.87 83.87 0 0 1 128 44m0 168a85 85 0 0 1-10.37-.66l93.71-93.71A83.87 83.87 0 0 1 128 212");
}
</style><path class="xlkukn9kx"/>`,
		"fallback": "ph:boules-bold",
	});
}

export default Component;
