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
		"content": `<style>.zn1ssjbde {
  fill: currentColor;
  d: path("M16 11.664V5h1v5.664zM5 19V5h1v14zm5.5-10.98V5h1v3.02zm0 5.48v-3.02h1v3.02zm0 5.5v-3.02h1V19zm3.73 0v-2.21l5.96-5.934l2.19 2.204L16.44 19zm6.886-5.94l-.925-.945zm-6 5.056h.95l3.467-3.474l-.47-.475l-.455-.488l-3.492 3.487zm3.948-3.949l-.456-.488l.925.963z");
}
</style><path class="zn1ssjbde"/>`,
		"fallback": "material-symbols-light:edit-road-outline-sharp",
	});
}

export default Component;
