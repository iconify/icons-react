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
		"content": `<style>.c_z7s1b_x {
  fill: currentColor;
  d: path("M206 96a6 6 0 0 1-6 6h-66v114a6 6 0 0 1-12 0V102H56a6 6 0 0 1 0-12h144a6 6 0 0 1 6 6M56 62h144a6 6 0 0 0 0-12H56a6 6 0 0 0 0 12");
}
</style><path class="c_z7s1b_x"/>`,
		"fallback": "ph:currency-kzt-light",
	});
}

export default Component;
