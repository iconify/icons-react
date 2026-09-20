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
		"content": `<style>.tid-pwb3b {
  fill: currentColor;
  d: path("M5 20V9.5l7-5.288L19 9.5V20h-5.192v-6.384h-3.616V20z");
}
</style><path class="tid-pwb3b"/>`,
		"fallback": "material-symbols-light:home-sharp",
	});
}

export default Component;
