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
		"content": `<style>.j10ky4wim {
  fill: currentColor;
  d: path("M6.5 17V9h1v8zm5 0V9h1v8zm-7.961 3v-1h16.923v1zM16.5 17V9h1v8zM3.539 7v-.846L12 2.116l8.462 4.038V7zM6.18 6h11.638zm0 0h11.638L12 3.25z");
}
</style><path class="j10ky4wim"/>`,
		"fallback": "material-symbols-light:account-balance-outline",
	});
}

export default Component;
