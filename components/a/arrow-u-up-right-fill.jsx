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
		"content": `<style>.rumt2jndg {
  fill: currentColor;
  d: path("M168 136V96H88a48 48 0 0 0 0 96h88a8 8 0 0 1 0 16H88a64 64 0 0 1 0-128h80V40a8 8 0 0 1 13.66-5.66l48 48a8 8 0 0 1 0 11.32l-48 48A8 8 0 0 1 168 136");
}
</style><path class="rumt2jndg"/>`,
		"fallback": "ph:arrow-u-up-right-fill",
	});
}

export default Component;
