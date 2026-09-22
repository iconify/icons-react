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
		"content": `<style>.oz5wri42l {
  fill: currentColor;
  d: path("m15.9 19.55l-1.4-1.425L16.6 16l-2.1-2.125l1.4-1.425l2.125 2.15l2.125-2.15l1.4 1.425L19.45 16l2.1 2.125l-1.4 1.425l-2.125-2.15zM8 20v-7L.95 4h18.1L12 13v7z");
}
</style><path class="oz5wri42l"/>`,
		"fallback": "material-symbols:filter-cancel-sharp",
	});
}

export default Component;
