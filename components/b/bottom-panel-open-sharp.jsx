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
		"content": `<style>.v0olfu_gb {
  fill: currentColor;
  d: path("M8.827 11.596h6.346L12 8.404zM5 15h14V5H5zm-1 5V4h16v16z");
}
</style><path class="v0olfu_gb"/>`,
		"fallback": "material-symbols-light:bottom-panel-open-sharp",
	});
}

export default Component;
