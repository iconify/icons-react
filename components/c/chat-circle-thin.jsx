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
		"content": `<style>.h3xtukb7g {
  fill: currentColor;
  d: path("M128 28a100 100 0 0 0-87.47 148.5l-11.9 35.69a12 12 0 0 0 15.18 15.18l35.69-11.9A100 100 0 1 0 128 28m0 192a92 92 0 0 1-46.07-12.35a4.05 4.05 0 0 0-2-.54a4 4 0 0 0-1.27.21l-37.38 12.46a4 4 0 0 1-5.06-5.06l12.46-37.38a4 4 0 0 0-.33-3.27A92 92 0 1 1 128 220");
}
</style><path class="h3xtukb7g"/>`,
		"fallback": "ph:chat-circle-thin",
	});
}

export default Component;
