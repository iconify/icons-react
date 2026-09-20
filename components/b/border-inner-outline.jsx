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
		"content": `<style>.l_knogbbb {
  fill: currentColor;
  d: path("M3 21v-2h2v2zm0-4v-2h2v2zm0-8V7h2v2zm0-4V3h2v2zm4 16v-2h2v2zM7 5V3h2v2zm8 16v-2h2v2zm4 0v-2h2v2zm0-4v-2h2v2zm0-8V7h2v2zm0-4V3h2v2zm-4 0V3h2v2zm-4 16v-8H3v-2h8V3h2v8h8v2h-8v8z");
}
</style><path class="l_knogbbb"/>`,
		"fallback": "material-symbols:border-inner-outline",
	});
}

export default Component;
