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
		"content": `<style>.lhefswbdd {
  fill: currentColor;
  d: path("M5.308 16.5h1v-4h4.615v4h1v-9h-1v4H6.308v-4h-1zm10.384-2h1v-2h2v-1h-2v-2h-1v2h-2v1h2zM2 20V4h20v16zm1-1h18V5H3zm0 0V5z");
}
</style><path class="lhefswbdd"/>`,
		"fallback": "material-symbols-light:h-plus-mobiledata-badge-outline-sharp",
	});
}

export default Component;
