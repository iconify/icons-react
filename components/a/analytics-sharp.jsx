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
		"content": `<style>.ak2rfhb2z {
  fill: currentColor;
  d: path("M3 21V3h18v18zm4-4h2v-5H7zm8 0h2V7h-2zm-4 0h2v-3h-2zm0-5h2v-2h-2z");
}
</style><path class="ak2rfhb2z"/>`,
		"fallback": "material-symbols:analytics-sharp",
	});
}

export default Component;
