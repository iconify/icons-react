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
		"content": `<style>.sl9y0kb5t {
  fill: currentColor;
  d: path("M5 20V9.5l7-5.288L19 9.5V20h-2.5v-9.02h-9V20zm3.5-1.02h7v-3h-7zm0-4h7v-3h-7z");
}
</style><path class="sl9y0kb5t"/>`,
		"fallback": "material-symbols-light:garage-home-sharp",
	});
}

export default Component;
