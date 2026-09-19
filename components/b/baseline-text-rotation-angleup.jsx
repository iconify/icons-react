import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.w452jz58z {
  fill: currentColor;
  d: path("M4.49 4.21L3.43 5.27L7.85 16.4l1.48-1.48l-.92-2.19l3.54-3.54l2.19.92l1.48-1.48zm3.09 6.8L5.36 6.14l4.87 2.23zm12.99-1.68h-4.24l1.41 1.41l-8.84 8.84L10.32 21l8.84-8.84l1.41 1.41z");
}
</style><path class="w452jz58z"/>`,
		"fallback": "ic:baseline-text-rotation-angleup",
	});
}

export default Component;
