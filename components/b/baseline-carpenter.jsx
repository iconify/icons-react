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
		"content": `<style>.zkbwkrbxo {
  fill: currentColor;
  d: path("M19.73 14.23L7 1.5L3.11 5.39l8.13 11.67c-.78.78-.78 2.05 0 2.83l1.41 1.41c.78.78 2.05.78 2.83 0l4.24-4.24c.79-.78.79-2.05.01-2.83m-5.66 5.65l-1.41-1.41l4.24-4.24l1.41 1.41z");
}
</style><path class="zkbwkrbxo"/>`,
		"fallback": "ic:baseline-carpenter",
	});
}

export default Component;
