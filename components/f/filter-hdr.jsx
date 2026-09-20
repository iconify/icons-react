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
		"content": `<style>.d6vrtlb_x {
  fill: currentColor;
  d: path("m2.904 17l4.192-5.616L10.558 16h2.544l-2.64-3.5l3.634-4.846l7 9.346z");
}
</style><path class="d6vrtlb_x"/>`,
		"fallback": "material-symbols-light:filter-hdr",
	});
}

export default Component;
