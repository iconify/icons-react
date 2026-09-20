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
		"content": `<style>.s9us6-6wa {
  fill: currentColor;
  d: path("M10.558 17v-1h2.865v1zm-3.75-4.5v-1h10.365v1zM4 8V7h16v1z");
}
</style><path class="s9us6-6wa"/>`,
		"fallback": "material-symbols-light:filter-list-outline-sharp",
	});
}

export default Component;
