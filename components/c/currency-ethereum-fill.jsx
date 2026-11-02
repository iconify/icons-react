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
		"content": `<style>.hahx5mb1b {
  fill: currentColor;
  d: path("m12.832 2.445l5.51 8.266l-.789.395L12 13.882l-5.553-2.777l-.789-.394l5.51-8.266a1 1 0 0 1 1.664 0m5.615 10.449l.238-.118l-5.853 8.779a1 1 0 0 1-1.664 0l-5.853-8.779l.238.119l6 2.999a1 1 0 0 0 .894 0Z");
}
</style><path class="hahx5mb1b"/>`,
		"fallback": "coolicons:currency-ethereum-fill",
	});
}

export default Component;
