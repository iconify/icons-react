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
		"content": `<style>.hukz9nbfr {
  fill: currentColor;
  d: path("M3 21v-2h18v2zm8-4V7h10v10zM3 5V3h18v2zm0 12v-2h6v2z");
}
</style><path class="hukz9nbfr"/>`,
		"fallback": "material-symbols:format-image-inline-right-sharp",
	});
}

export default Component;
