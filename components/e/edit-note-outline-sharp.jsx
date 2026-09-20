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
		"content": `<style>.zw4r-6bip {
  fill: currentColor;
  d: path("M5 14v-1h7v1zm0-4V9h11v1zm0-4V5h11v1zm8.23 13v-2.21l5.96-5.934l2.19 2.204L15.44 19zm6.886-5.94l-.925-.945zm-6 5.056h.95l3.467-3.474l-.47-.475l-.455-.488l-3.492 3.487zm3.948-3.949l-.456-.488l.925.963z");
}
</style><path class="zw4r-6bip"/>`,
		"fallback": "material-symbols-light:edit-note-outline-sharp",
	});
}

export default Component;
