import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jm_qcm4gp {
  fill: currentColor;
  d: path("M204 136a12 12 0 0 1-12 12H64a12 12 0 0 1 0-24h128a12 12 0 0 1 12 12m28-60H24a12 12 0 0 0 0 24h208a12 12 0 0 0 0-24m-80 96h-48a12 12 0 0 0 0 24h48a12 12 0 0 0 0-24");
}
</style><path class="jm_qcm4gp"/>`,
		"fallback": "ph:funnel-simple-bold",
	});
}

export default Component;
