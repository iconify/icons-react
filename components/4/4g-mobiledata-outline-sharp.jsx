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
		"content": `<style>.zay2ahbkc {
  fill: currentColor;
  d: path("M7.5 16.5v-3h-4v-6h1v5h3v-5h1v5h2v1h-2v3zm5 0v-9h8v1h-7v7h6v-3H17v-1h3.5v5z");
}
</style><path class="zay2ahbkc"/>`,
		"fallback": "material-symbols-light:4g-mobiledata-outline-sharp",
	});
}

export default Component;
