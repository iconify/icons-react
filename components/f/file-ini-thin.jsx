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
		"content": `<style>.ea74uubem {
  fill: currentColor;
  d: path("M44 152v56a4 4 0 0 1-8 0v-56a4 4 0 0 1 8 0m76-4a4 4 0 0 0-4 4v43.52l-32.75-45.84A4 4 0 0 0 76 152v56a4 4 0 0 0 8 0v-43.52l32.75 45.84A4 4 0 0 0 124 208v-56a4 4 0 0 0-4-4m40 0a4 4 0 0 0-4 4v56a4 4 0 0 0 8 0v-56a4 4 0 0 0-4-4m52-60v136a4 4 0 0 1-8 0V92h-52a4 4 0 0 1-4-4V36H56a4 4 0 0 0-4 4v72a4 4 0 0 1-8 0V40a12 12 0 0 1 12-12h96a4 4 0 0 1 2.83 1.17l56 56A4 4 0 0 1 212 88m-56-4h42.34L156 41.65Z");
}
</style><path class="ea74uubem"/>`,
		"fallback": "ph:file-ini-thin",
	});
}

export default Component;
