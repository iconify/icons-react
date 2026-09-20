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
		"content": `<style>.rhh5ssbfw {
  fill: currentColor;
  d: path("M14.8 11.975L6.825 4H21.05zM19.775 22.6L14 16.825V20h-4v-7.175l-8.6-8.6L2.8 2.8l18.4 18.4z");
}
</style><path class="rhh5ssbfw"/>`,
		"fallback": "material-symbols:filter-alt-off-sharp",
	});
}

export default Component;
