import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rs_w9tb8y {
  fill: currentColor;
  d: path("M3.374 10.168a.5.5 0 0 0-.748.664l4 4.5a.5.5 0 0 0 .728.022l10.5-10.5a.5.5 0 0 0-.707-.708L7.02 14.271z");
}
</style><path class="rs_w9tb8y"/>`,
		"fallback": "fluent:checkmark-20-regular",
	});
}

export default Component;
