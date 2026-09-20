import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rykn6etxo {
  fill: var(--svg-color--40c0e7, #40c0e7);
  d: path("m6.24 98.99l54.93-31.71v31.71L121.76 64L61.17 29.01v31.72L6.24 29.01z");
}
</style><path class="rykn6etxo"/>`,
		"fallback": "noto-v1:fast-forward-button",
	});
}

export default Component;
