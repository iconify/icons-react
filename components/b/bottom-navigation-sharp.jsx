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
		"content": `<style>.q_9v_pbxm {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1-4.615h14V5H5z");
}
</style><path class="q_9v_pbxm"/>`,
		"fallback": "material-symbols-light:bottom-navigation-sharp",
	});
}

export default Component;
