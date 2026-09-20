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
		"content": `<style>.pu17hnbac {
  fill: currentColor;
  d: path("M3 21V3h1.23v18zm8-4.5v-9h2v9zm8.77 4.5V3H21v18z");
}
</style><path class="pu17hnbac"/>`,
		"fallback": "material-symbols-light:horizontal-distribute",
	});
}

export default Component;
