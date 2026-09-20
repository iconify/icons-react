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
		"content": `<style>.hmyxx1_md {
  fill: currentColor;
  d: path("M8.77 17V4h6.46v13zm0 2.385v-1h6.46v1z");
}
</style><path class="hmyxx1_md"/>`,
		"fallback": "material-symbols-light:general-device-sharp",
	});
}

export default Component;
