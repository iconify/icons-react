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
		"content": `<style>.xdp_i5b7e {
  fill: currentColor;
  d: path("m219.58 70.21l-16-32A4 4 0 0 0 200 36H56a4 4 0 0 0-3.58 2.21l-16 32A4 4 0 0 0 36 72v136a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V72a4 4 0 0 0-.42-1.79M58.47 44h139.06l12 24H46.47ZM208 212H48a4 4 0 0 1-4-4V76h168v132a4 4 0 0 1-4 4m-45.17-78.83a4 4 0 0 1-5.66 5.66L132 113.66V184a4 4 0 0 1-8 0v-70.34l-25.17 25.17a4 4 0 0 1-5.66-5.66l32-32a4 4 0 0 1 5.66 0Z");
}
</style><path class="xdp_i5b7e"/>`,
		"fallback": "ph:box-arrow-up-thin",
	});
}

export default Component;
