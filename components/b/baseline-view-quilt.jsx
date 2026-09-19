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
		"content": `<style>.qr7q-8b6x {
  fill: currentColor;
  d: path("M21 5v6.5H9.33V5zm-6.33 14v-6.5H9.33V19zm1-6.5V19H21v-6.5zM8.33 19V5H3v14z");
}
</style><path class="qr7q-8b6x"/>`,
		"fallback": "ic:baseline-view-quilt",
	});
}

export default Component;
