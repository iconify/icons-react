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
		"content": `<style>.g-mj-vovm {
  fill: currentColor;
  d: path("M11.192 10.808V5H21v5.808zM3 19v-5.808h8.808V19zm0-8.192V5h5.808v5.808zm9.192-1H20V6h-7.808zM4 18h6.808v-3.808H4zm0-8.192h3.808V6H4zM14.23 21v-2.21l5.96-5.934l2.19 2.204L16.44 21zm6.886-5.94l-.925-.945zm-6 5.056h.95l3.467-3.474l-.47-.475l-.455-.488l-3.492 3.486zm3.948-3.949l-.456-.488l.925.963z");
}
</style><path class="g-mj-vovm"/>`,
		"fallback": "material-symbols-light:dashboard-2-edit-outline-sharp",
	});
}

export default Component;
