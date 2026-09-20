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
		"content": `<style>.hcz140bfk {
  fill: currentColor;
  d: path("M2 21V3h9v18zm11 0V3h9v18zm-8-6h3v-2H5zm11 0h3v-2h-3zM5 12h3v-2H5zm11 0h3v-2h-3zM5 9h3V7H5zm11 0h3V7h-3z");
}
</style><path class="hcz140bfk"/>`,
		"fallback": "material-symbols:host-sharp",
	});
}

export default Component;
