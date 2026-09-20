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
		"content": `<style>.xnre-0bwl {
  fill: currentColor;
  d: path("M4 15.885v-1h12.25v1zM5.866 12.5v-1h12.25v1zM7.75 9.116v-1H20v1z");
}
</style><path class="xnre-0bwl"/>`,
		"fallback": "material-symbols-light:clear-all-outline",
	});
}

export default Component;
