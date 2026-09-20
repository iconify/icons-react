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
		"content": `<style>.sz6vlabku {
  fill: currentColor;
  d: path("M7.06 15.116h4.4v-.827H8.117l3.249-4.681v-.704H7.19v.827h3.117L7.06 14.423zM21 5v10.73q0 1.368-.977 2.329q-.978.96-2.35.96H6.327q-1.406 0-2.366-.96Q3 17.098 3 15.73V5zm-7.873 10.116h3.796v-.827h-2.946V8.904h-.85z");
}
</style><path class="sz6vlabku"/>`,
		"fallback": "material-symbols-light:game-button-zl",
	});
}

export default Component;
