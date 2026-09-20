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
		"content": `<style>.you4blb7x {
  fill: currentColor;
  d: path("M11.52 19v-8H6.015l2.178-7h7.65l2.179 7h-5.504v8zm-4.15-9h9.3l-1.55-5h-6.2zm1.15 11v-1h7v1zm3.5-13.5");
}
</style><path class="you4blb7x"/>`,
		"fallback": "material-symbols-light:floor-lamp-outline-sharp",
	});
}

export default Component;
