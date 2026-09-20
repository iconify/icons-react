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
		"content": `<style>.v1po6berb {
  fill: currentColor;
  d: path("M1 23v-2l5-1.375V17H3V6H2V4h3V2h14v2h3v2h-1v9h-3v1.375L23 15v2zm8-4.175l6-1.65V15h-2v2H9zM5 12h6V6H5zm8-2h6V6h-6z");
}
</style><path class="v1po6berb"/>`,
		"fallback": "material-symbols:funicular",
	});
}

export default Component;
