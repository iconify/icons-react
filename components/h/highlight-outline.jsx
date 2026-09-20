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
		"content": `<style>.x62qrn9ij {
  fill: currentColor;
  d: path("M5.65 8L3.5 5.9l1.4-1.45L7.05 6.6zM11 5V2h2v3zm7.4 3l-1.45-1.4l2.15-2.1l1.4 1.4zM9 22v-5l-3-3V9h12v5l-3 3v5zm2-2h2v-3.825l3-3V11H8v2.175l3 3zm1-4.5");
}
</style><path class="x62qrn9ij"/>`,
		"fallback": "material-symbols:highlight-outline",
	});
}

export default Component;
