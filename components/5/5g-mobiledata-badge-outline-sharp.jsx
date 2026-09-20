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
		"content": `<style>.kp08m5bbn {
  fill: currentColor;
  d: path("M2 20V4h20v16zm1-1h18V5H3zm15.5-7.5H16v1h1.5v3h-4v-7h5v-1h-6v9h6zm-13 5h5v-5h-4v-3h4v-1h-5v5h4v3h-4zM3 19V5z");
}
</style><path class="kp08m5bbn"/>`,
		"fallback": "material-symbols-light:5g-mobiledata-badge-outline-sharp",
	});
}

export default Component;
