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
		"content": `<style>.teg8udb9t {
  fill: currentColor;
  d: path("M13.28 12H18v2h-5v7h-2v-7H6v-2h4.72L5 3h2.37L12 10.29L16.63 3H19z");
}
</style><path class="teg8udb9t"/>`,
		"fallback": "ic:baseline-currency-yuan",
	});
}

export default Component;
