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
		"content": `<style>.brf054g3u {
  fill: currentColor;
  d: path("M8 14.192h.885v-3H8v1.058H6.5v.885H8zm1.885-1.057H17.5v-.885H9.885zm5.23-2.327H16V9.75h1.5v-.885H16V7.809h-.885zM6.5 9.75h7.616v-.885H6.5zM9 20v-2H3V4h18v14h-6v2zm-5-3h16V5H4zm0 0V5z");
}
</style><path class="brf054g3u"/>`,
		"fallback": "material-symbols-light:display-settings-outline-sharp",
	});
}

export default Component;
