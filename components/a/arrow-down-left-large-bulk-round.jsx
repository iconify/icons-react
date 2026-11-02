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
		"content": `<style>.v3ye0t2rd {
  fill: currentColor;
  d: path("M5 18v-8a1 1 0 0 1 2 0v5.586L17.293 5.293a.999.999 0 1 1 1.414 1.414L8.414 17H14a1 1 0 0 1 0 2H6a.997.997 0 0 1-1-1");
}
</style><path class="v3ye0t2rd"/>`,
		"fallback": "coolicons:arrow-down-left-large-bulk-round",
	});
}

export default Component;
