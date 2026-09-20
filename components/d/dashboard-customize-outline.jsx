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
		"content": `<style>.f4ep6ibnn {
  fill: currentColor;
  d: path("M3.5 3.5h7v7h-7zm1 1v5zm9-1h7v7h-7zm1 1v5zm-11 9h7v7h-7zm1 1v5zm12-1h1v3h3v1h-3v3h-1v-3h-3v-1h3zm-2-9v5h5v-5zm-10 0v5h5v-5zm0 10v5h5v-5z");
}
</style><path class="f4ep6ibnn"/>`,
		"fallback": "material-symbols-light:dashboard-customize-outline",
	});
}

export default Component;
