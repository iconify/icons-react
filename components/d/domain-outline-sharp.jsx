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
		"content": `<style>.ol7-ofblv {
  fill: currentColor;
  d: path("M2.73 20.154v-17h9v4h9.54v13zm1-1h3v-3h-3zm0-4h3v-3h-3zm0-4h3v-3h-3zm0-4h3v-3h-3zm4 12h3v-3h-3zm0-4h3v-3h-3zm0-4h3v-3h-3zm0-4h3v-3h-3zm4 12h8.54v-11h-8.54v3h2.386v1H11.73v3h2.385v1H11.73zm4.77-7v-1h1v1zm0 4v-1h1v1z");
}
</style><path class="ol7-ofblv"/>`,
		"fallback": "material-symbols-light:domain-outline-sharp",
	});
}

export default Component;
