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
		"content": `<style>.hqf5tacmw {
  fill: currentColor;
  d: path("M6.5 16.385v-3h-3v-1h3v-3h1v3h3v1h-3v3zm9.827 1.576V7.474l-2.53 1.766l-.574-.827l3.37-2.373h.791v11.923z");
}
</style><path class="hqf5tacmw"/>`,
		"fallback": "material-symbols-light:exposure-plus-1-outline-sharp",
	});
}

export default Component;
