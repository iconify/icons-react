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
		"content": `<style>.nefjy4b4y {
  fill: currentColor;
  d: path("m16.375 19l-3.55-3.55l1.4-1.4l2.125 2.125l4.25-4.25L22 13.35zm0-8l-3.55-3.55l1.4-1.4l2.125 2.125l4.25-4.25L22 5.35zM2 17v-2h9v2zm0-8V7h9v2z");
}
</style><path class="nefjy4b4y"/>`,
		"fallback": "material-symbols:checklist-rtl-outline-sharp",
	});
}

export default Component;
