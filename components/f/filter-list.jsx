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
		"content": `<style>.pffl33b1v {
  fill: currentColor;
  d: path("M10 18h4v-2h-4zM3 6v2h18V6zm3 7h12v-2H6z");
}
</style><path class="pffl33b1v"/>`,
		"fallback": "ic:filter-list",
	});
}

export default Component;
