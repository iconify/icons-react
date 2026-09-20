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
		"content": `<style>.qf9p3_bls {
  fill: currentColor;
  d: path("M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152ZM84 144V96a12 12 0 0 1 12-12h48a12 12 0 0 1 0 24h-19l43.52 43.51a12 12 0 0 1-17 17L108 125v19a12 12 0 0 1-24 0");
}
</style><path class="qf9p3_bls"/>`,
		"fallback": "ph:arrow-square-up-left-bold",
	});
}

export default Component;
