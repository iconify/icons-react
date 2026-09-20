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
		"content": `<style>.s1kh9sbks {
  fill: currentColor;
  d: path("m14.8 11.975l-1.425-1.425L16.95 6H8.825l-2-2H21.05zM19.775 22.6L14 16.825V20h-4v-7.175l-8.6-8.6L2.8 2.8l18.4 18.4zm-6.4-12.05");
}
</style><path class="s1kh9sbks"/>`,
		"fallback": "material-symbols:filter-alt-off-outline-sharp",
	});
}

export default Component;
