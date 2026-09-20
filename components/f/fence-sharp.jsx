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
		"content": `<style>.lv5nn0b4t {
  fill: currentColor;
  d: path("M5.5 19.5v-4h-1v-1h1v-3h-1v-1h1V7.212l2.5-2.5l2 2l2.025-2l2 2l2-2l2.5 2.5V10.5h.975v1h-.975v3h.975v1h-.975v4zm1-9h3V7.614L8 6.114l-1.5 1.5zm4 0h3V7.614l-1.5-1.5l-1.5 1.5zm4.025 0H17.5V7.614l-1.5-1.5l-1.475 1.494zm-8.025 4h3v-3h-3zm4 0h3v-3h-3zm4.025 0H17.5v-3h-2.975zm-8.025 4h3v-3h-3zm4 0h3v-3h-3zm4.025 0H17.5v-3h-2.975z");
}
</style><path class="lv5nn0b4t"/>`,
		"fallback": "material-symbols-light:fence-sharp",
	});
}

export default Component;
