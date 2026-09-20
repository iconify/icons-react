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
		"content": `<style>.l4zl7vyto {
  fill: currentColor;
  d: path("M53.92 34.62a8 8 0 1 0-11.84 10.76L44.46 48H40a16 16 0 0 0-16 16v160a15.85 15.85 0 0 0 9.24 14.5A16.1 16.1 0 0 0 40 240a15.94 15.94 0 0 0 10.26-3.78l.08-.07L83 208h106.92l12.16 13.38a8 8 0 1 0 11.84-10.76ZM80 192a8 8 0 0 0-5.23 1.95L40 224V64h19l116.37 128ZM232 64v122a8 8 0 0 1-16 0V64H105.79a8 8 0 0 1 0-16H216a16 16 0 0 1 16 16");
}
</style><path class="l4zl7vyto"/>`,
		"fallback": "ph:chat-slash",
	});
}

export default Component;
