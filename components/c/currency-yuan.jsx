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
		"content": `<style>.sa2x56nbq {
  fill: currentColor;
  d: path("M11 21v-7H6v-2h4.725L5 3h2.375L12 10.3L16.625 3H19l-5.725 9H18v2h-5v7z");
}
</style><path class="sa2x56nbq"/>`,
		"fallback": "material-symbols:currency-yuan",
	});
}

export default Component;
