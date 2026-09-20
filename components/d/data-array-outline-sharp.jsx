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
		"content": `<style>.w8gq167yp {
  fill: currentColor;
  d: path("M15 20v-2h3V6h-3V4h5v16zM4 20V4h5v2H6v12h3v2z");
}
</style><path class="w8gq167yp"/>`,
		"fallback": "material-symbols:data-array-outline-sharp",
	});
}

export default Component;
