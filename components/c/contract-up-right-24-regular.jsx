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
		"content": `<style>.eqb94kblp {
  fill: currentColor;
  d: path("M6.25 3A3.25 3.25 0 0 0 3 6.25v4a.75.75 0 0 0 1.5 0v-4c0-.966.784-1.75 1.75-1.75H12v5.25A2.25 2.25 0 0 0 14.25 12h5.25v5.75a1.75 1.75 0 0 1-1.75 1.75h-4a.75.75 0 0 0 0 1.5h4A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3zm7.25 6.75V4.5h4.25c.966 0 1.75.784 1.75 1.75v4.25h-5.25a.75.75 0 0 1-.75-.75m-10.5 4c0 .414.336.75.75.75h4.69l-5.22 5.22a.75.75 0 1 0 1.06 1.06l5.22-5.22v4.69a.75.75 0 0 0 1.5 0v-6.5a.75.75 0 0 0-.75-.75h-6.5a.75.75 0 0 0-.75.75");
}
</style><path class="eqb94kblp"/>`,
		"fallback": "fluent:contract-up-right-24-regular",
	});
}

export default Component;
