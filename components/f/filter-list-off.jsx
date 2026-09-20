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
		"content": `<style>.xw1u9uy-l {
  fill: currentColor;
  d: path("m19.775 22.625l-18.4-18.4L2.8 2.8l18.4 18.4zM15.825 13l-2-2H18v2zm-5-5l-2-2H21v2zM10 18v-2h4v2zm-4-5v-2h4.15v2zM3 8V6h2.15v2z");
}
</style><path class="xw1u9uy-l"/>`,
		"fallback": "material-symbols:filter-list-off",
	});
}

export default Component;
