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
		"content": `<style>.w6qozxy_r {
  fill: currentColor;
  d: path("M17.75 2a2.25 2.25 0 0 1 2.245 2.096L20 4.25v15.5a2.25 2.25 0 0 1-2.096 2.245L17.75 22H6.25a2.25 2.25 0 0 1-2.245-2.096L4 19.75V4.25a2.25 2.25 0 0 1 2.096-2.245L6.25 2zM8.505 5.005a1.5 1.5 0 0 0 0 3h7a1.5 1.5 0 0 0 0-3z");
}
</style><path class="w6qozxy_r"/>`,
		"fallback": "fluent:document-header-24-filled",
	});
}

export default Component;
