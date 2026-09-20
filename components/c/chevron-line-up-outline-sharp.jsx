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
		"content": `<style>.p8jiiqcba {
  fill: currentColor;
  d: path("M6.5 7.77v-1h11v1zm.9 10.015l-.708-.708L12 11.769l5.308 5.308l-.708.707l-4.6-4.6z");
}
</style><path class="p8jiiqcba"/>`,
		"fallback": "material-symbols-light:chevron-line-up-outline-sharp",
	});
}

export default Component;
