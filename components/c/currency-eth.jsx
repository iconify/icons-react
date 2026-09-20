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
		"content": `<style>.rjfeeqb1k {
  fill: currentColor;
  d: path("m222.29 123.06l-88-112a8 8 0 0 0-12.58 0l-88 112a8 8 0 0 0 0 9.88l88 112a8 8 0 0 0 12.58 0l88-112a8 8 0 0 0 0-9.88M136 39.13l67.42 85.8L136 155.58Zm-16 116.45l-67.42-30.65L120 39.13Zm0 17.57v43.72l-53.43-68Zm16 0l53.43-24.29l-53.43 68Z");
}
</style><path class="rjfeeqb1k"/>`,
		"fallback": "ph:currency-eth",
	});
}

export default Component;
