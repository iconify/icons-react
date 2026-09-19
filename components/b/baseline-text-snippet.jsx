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
		"content": `<style>.ffjmrdbxr {
  fill: currentColor;
  d: path("m20.41 8.41l-4.83-4.83c-.37-.37-.88-.58-1.41-.58H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9.83c0-.53-.21-1.04-.59-1.42M7 7h7v2H7zm10 10H7v-2h10zm0-4H7v-2h10z");
}
</style><path class="ffjmrdbxr"/>`,
		"fallback": "ic:baseline-text-snippet",
	});
}

export default Component;
