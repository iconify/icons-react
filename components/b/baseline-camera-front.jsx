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
		"content": `<style>.c76uq3bec {
  fill: currentColor;
  d: path("M10 20H5v2h5v2l3-3l-3-3zm4 0v2h5v-2zM12 8c1.1 0 2-.9 2-2s-.9-2-2-2s-1.99.9-1.99 2S10.9 8 12 8m5-8H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2M7 2h10v10.5c0-1.67-3.33-2.5-5-2.5s-5 .83-5 2.5z");
}
</style><path class="c76uq3bec"/>`,
		"fallback": "ic:baseline-camera-front",
	});
}

export default Component;
