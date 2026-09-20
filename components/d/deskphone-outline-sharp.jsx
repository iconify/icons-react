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
		"content": `<style>.x_fde_bai {
  fill: currentColor;
  d: path("M17 19h2V5h-2zM6 14h2v-2H6zm0 3h2v-2H6zm0-6h8V7H6zm3 3h2v-2H9zm0 3h2v-2H9zm3-3h2v-2h-2zm0 3h2v-2h-2zm3 1V6H5v12zM3 20V4h12V3h6v18h-6v-1zm2-2V6z");
}
</style><path class="x_fde_bai"/>`,
		"fallback": "material-symbols:deskphone-outline-sharp",
	});
}

export default Component;
