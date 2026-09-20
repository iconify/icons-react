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
		"content": `<style>.xytzknb1t {
  fill: currentColor;
  d: path("m222.29 123.06l-88-112a8 8 0 0 0-12.58 0l-88 112a8 8 0 0 0 0 9.88l88 112a8 8 0 0 0 12.58 0l88-112a8 8 0 0 0 0-9.88M136 155.58V39.13l67.42 85.8Zm-16 0l-67.42-30.65L120 39.13Zm0 17.57v43.72l-53.43-68Z");
}
</style><path class="xytzknb1t"/>`,
		"fallback": "ph:currency-eth-fill",
	});
}

export default Component;
