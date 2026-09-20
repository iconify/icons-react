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
		"content": `<style>.s_vkhfbdv {
  fill: currentColor;
  d: path("M6.02 20V4h12.276l3.404 8.5h-3.488V20zm3.592-8.5h10.6L17.619 5H7.02zM7.018 19h10.193v-6.5H8.935L7.018 7.721zm6.597-10.75");
}
</style><path class="s_vkhfbdv"/>`,
		"fallback": "material-symbols-light:devices-fold-2-outline-sharp",
	});
}

export default Component;
