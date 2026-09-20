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
		"content": `<style>.q-7l0ybll {
  fill: currentColor;
  d: path("M240 92h-28.7a12 12 0 0 0-11.3-8h-64a12 12 0 0 0-11.3 8H68V52a8 8 0 0 1 8-8a8.5 8.5 0 0 1 8.24 6.39a12 12 0 0 0 23.52-4.78A32.22 32.22 0 0 0 44 52v40H16a12 12 0 0 0-12 12v40a60.07 60.07 0 0 0 56 59.85V216a12 12 0 0 0 24 0v-12h88v12a12 12 0 0 0 24 0v-12.15A60.07 60.07 0 0 0 252 144v-40a12 12 0 0 0-12-12m-92 16h40v24h-40Zm80 36a36 36 0 0 1-36 36H64a36 36 0 0 1-36-36v-28h96v28a12 12 0 0 0 12 12h64a12 12 0 0 0 12-12v-28h16Z");
}
</style><path class="q-7l0ybll"/>`,
		"fallback": "ph:bathtub-bold",
	});
}

export default Component;
