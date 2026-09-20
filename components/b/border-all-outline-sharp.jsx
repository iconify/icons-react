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
		"content": `<style>.p9g6319tx {
  fill: currentColor;
  d: path("M4 20V4h16v16zm15-1v-6.5h-6.5V19zm0-14h-6.5v6.5H19zM5 5v6.5h6.5V5zm0 14h6.5v-6.5H5z");
}
</style><path class="p9g6319tx"/>`,
		"fallback": "material-symbols-light:border-all-outline-sharp",
	});
}

export default Component;
