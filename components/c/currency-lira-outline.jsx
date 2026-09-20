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
		"content": `<style>.o-kj5_bjy {
  fill: currentColor;
  d: path("M9.5 20v-5.054l-3 1.875V15.62l3-1.875v-3.523l-3 1.875V10.92l3-1.9V4h1v4.404l4-2.5V7.08l-4 2.525v3.523l4-2.5v1.177l-4 2.525V19h.5q2.075 0 3.672-1.386T16.462 14h1.019q-.173 2.56-2.028 4.28T11 20z");
}
</style><path class="o-kj5_bjy"/>`,
		"fallback": "material-symbols-light:currency-lira-outline",
	});
}

export default Component;
