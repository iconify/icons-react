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
		"content": `<style>.ky0g8-b8m {
  fill: currentColor;
  d: path("M208 36H83.31a12 12 0 0 0-8.48 3.51L39.52 74.83A11.9 11.9 0 0 0 36 83.31V208a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12M84 44h88v36a4 4 0 0 1-4 4H88a4 4 0 0 1-4-4Zm128 164a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V83.31a4 4 0 0 1 1.17-2.82L76 49.66V80a12 12 0 0 0 12 12h80a12 12 0 0 0 12-12V44h28a4 4 0 0 1 4 4Zm-84-92a36 36 0 1 0 36 36a36 36 0 0 0-36-36m0 64a28 28 0 1 1 28-28a28 28 0 0 1-28 28");
}
</style><path class="ky0g8-b8m"/>`,
		"fallback": "ph:floppy-disk-back-thin",
	});
}

export default Component;
