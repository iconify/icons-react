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
		"content": `<style>.ebdgmhjjv {
  fill: currentColor;
  d: path("M3 20v-5.5h7V16h4v-1.5h7V20zm8-5v-2h2v2zm-8-1.5V7h6V4h6v3h6v6.5h-7V12h-4v1.5zM10 7h4V5h-4z");
}
</style><path class="ebdgmhjjv"/>`,
		"fallback": "material-symbols-light:business-center-sharp",
	});
}

export default Component;
