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
		"content": `<style>.p565k4bfg {
  fill: currentColor;
  d: path("M4 20v-1h16v1zm4-3.75v-1h8v1zM4 12.5v-1h16v1zm4-3.75v-1h8v1zM4 5V4h16v1z");
}
</style><path class="p565k4bfg"/>`,
		"fallback": "material-symbols-light:format-align-center-sharp",
	});
}

export default Component;
