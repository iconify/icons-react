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
		"content": `<style>.mhvbb4bsi {
  fill: currentColor;
  d: path("M10 20v-7L2.95 4h18.1L14 13v7zm2-7.7L16.95 6h-9.9zm0 0");
}
</style><path class="mhvbb4bsi"/>`,
		"fallback": "material-symbols:filter-alt-outline-sharp",
	});
}

export default Component;
