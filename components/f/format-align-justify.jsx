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
		"content": `<style>.p2v7_fg2s {
  fill: currentColor;
  d: path("M4 20v-1h16v1zm0-3.75v-1h16v1zm0-3.75v-1h16v1zm0-3.75v-1h16v1zM4 5V4h16v1z");
}
</style><path class="p2v7_fg2s"/>`,
		"fallback": "material-symbols-light:format-align-justify",
	});
}

export default Component;
