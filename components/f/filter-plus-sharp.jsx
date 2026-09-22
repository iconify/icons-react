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
		"content": `<style>.bjvwrs0gm {
  fill: currentColor;
  d: path("M8.5 19v-6.346L2.45 5h14.1l-6.05 7.654V19zm8.539 0v-2.962h-2.981v-1h2.98v-2.98h1v2.98H21v1h-2.962V19z");
}
</style><path class="bjvwrs0gm"/>`,
		"fallback": "material-symbols-light:filter-plus-sharp",
	});
}

export default Component;
