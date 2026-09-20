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
		"content": `<style>.e348o2hja {
  fill: currentColor;
  d: path("M21 21H3V3h18zM5 19h7v-8l7 8V5h-7v6z");
}
</style><path class="e348o2hja"/>`,
		"fallback": "material-symbols:filter-b-and-w-sharp",
	});
}

export default Component;
