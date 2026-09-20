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
		"content": `<style>.b5hipjbbm {
  fill: currentColor;
  d: path("M9.385 8.385v-1h8.23v1zm0 2.769v-1h8.23v1zM11.846 20H5zm0 1H6q-.846 0-1.423-.577T4 19v-2.77h3V3h13v6.577l-1 1V4H8v12.23h5.346l-1 1H5V19q0 .425.288.713T6 20h5.846zm2.385 0v-2.21l5.96-5.934l2.19 2.204L16.44 21zm6.885-5.94l-.925-.945zm-6 5.056h.95l3.467-3.474l-.47-.475l-.455-.488l-3.492 3.486zm3.948-3.949l-.456-.488l.925.963z");
}
</style><path class="b5hipjbbm"/>`,
		"fallback": "material-symbols-light:contract-edit-outline-sharp",
	});
}

export default Component;
