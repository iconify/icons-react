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
		"content": `<style>.g_nf5wbbo {
  fill: currentColor;
  d: path("M20 20V4zM4 20h9.5V4H4zm16 0V4h-5.5v16z");
}
</style><path class="g_nf5wbbo"/>`,
		"fallback": "material-symbols-light:grid-layout-side-sharp",
	});
}

export default Component;
