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
		"content": `<style>.k5w-jz4wj {
  fill: currentColor;
  d: path("M11 13h7V6h-7zm-8 8V3h18v18zm2-2h14V5H5zm0 0V5z");
}
</style><path class="k5w-jz4wj"/>`,
		"fallback": "material-symbols:dropdown-outline-sharp",
	});
}

export default Component;
