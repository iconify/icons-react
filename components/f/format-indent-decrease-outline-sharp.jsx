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
		"content": `<style>.j00fqrc8k {
  fill: currentColor;
  d: path("M4 20v-1h16v1zm8-3.75v-1h8v1zm0-3.75v-1h8v1zm0-3.75v-1h8v1zM4 5V4h16v1zm2.808 9.808L4 12l2.808-2.808z");
}
</style><path class="j00fqrc8k"/>`,
		"fallback": "material-symbols-light:format-indent-decrease-outline-sharp",
	});
}

export default Component;
