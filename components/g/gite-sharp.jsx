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
		"content": `<style>.x14j4oble {
  fill: currentColor;
  d: path("M3 18v-7.558l3.692-3.846H8V5h1v1.596h8.308L21 10.442V18zm12-1h5v-6.136l-2.48-2.616L15 10.902zM4 17h10v-5.211H4z");
}
</style><path class="x14j4oble"/>`,
		"fallback": "material-symbols-light:gite-sharp",
	});
}

export default Component;
