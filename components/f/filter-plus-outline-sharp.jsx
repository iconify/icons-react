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
		"content": `<style>.w809hab9z {
  fill: currentColor;
  d: path("M8.5 19v-6.346L2.45 5h14.1l-6.05 7.654V19zm1-6.7L14.45 6h-9.9zm7.539 6.7v-2.962h-2.981v-1h2.98v-2.98h1v2.98H21v1h-2.962V19z");
}
</style><path class="w809hab9z"/>`,
		"fallback": "material-symbols-light:filter-plus-outline-sharp",
	});
}

export default Component;
