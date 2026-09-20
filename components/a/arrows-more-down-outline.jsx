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
		"content": `<style>.yr1-__bll {
  fill: currentColor;
  d: path("M6 20V10h1v9h9v1zm4-4V6h1v9h9v1z");
}
</style><path class="yr1-__bll"/>`,
		"fallback": "material-symbols-light:arrows-more-down-outline",
	});
}

export default Component;
