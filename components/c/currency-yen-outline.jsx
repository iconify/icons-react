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
		"content": `<style>.kct7lkvye {
  fill: currentColor;
  d: path("M11.5 20v-3.692h-5v-1h5V12.5h-5v-1h4.479L6.212 4h1.202L12 11.242L16.587 4h1.202l-4.768 7.5H17.5v1h-5v2.808h5v1h-5V20z");
}
</style><path class="kct7lkvye"/>`,
		"fallback": "material-symbols-light:currency-yen-outline",
	});
}

export default Component;
