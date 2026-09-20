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
		"content": `<style>.pk8ez2szh {
  fill: currentColor;
  d: path("M4 20h4.675v-4.656H4zm5.675 0h4.65v-4.656h-4.65zm5.65 0H20v-4.656h-4.675zM4 14.344h4.675V9.656H4zm5.675 0h4.65V9.656h-4.65zm5.65 0H20V9.656h-4.675zM4 8.656h4.675V4H4zm5.675 0h4.65V4h-4.65zm5.65 0H20V4h-4.675z");
}
</style><path class="pk8ez2szh"/>`,
		"fallback": "material-symbols-light:grid-on-sharp",
	});
}

export default Component;
