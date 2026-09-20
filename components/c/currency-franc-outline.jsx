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
		"content": `<style>.illmc7b9d {
  fill: currentColor;
  d: path("M7 21v-3H5v-2h2V3h11v2H9v6h8v2H9v3h4v2H9v3z");
}
</style><path class="illmc7b9d"/>`,
		"fallback": "material-symbols:currency-franc-outline",
	});
}

export default Component;
