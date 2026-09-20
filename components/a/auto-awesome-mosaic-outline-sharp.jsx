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
		"content": `<style>.g0t3gy1gh {
  fill: currentColor;
  d: path("M11 20H4V4h7zm-1-1V5H5v14zm3-8V4h7v7zm1-1h5V5h-5zm-1 10v-7h7v7zm1-1h5v-5h-5zm0-5");
}
</style><path class="g0t3gy1gh"/>`,
		"fallback": "material-symbols-light:auto-awesome-mosaic-outline-sharp",
	});
}

export default Component;
