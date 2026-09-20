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
		"content": `<style>.uupvhfbwl {
  fill: currentColor;
  d: path("M3 21v-2l4.25-1.225L9 3h6l1.75 14.775L21 19v2zm8-3h2V5h-2z");
}
</style><path class="uupvhfbwl"/>`,
		"fallback": "material-symbols:bike-dock-sharp",
	});
}

export default Component;
