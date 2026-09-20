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
		"content": `<style>.x-n8inoga {
  fill: currentColor;
  d: path("M9.27 20v-.77l1.884-1.884H3V4h18v13.346h-8.154l1.885 1.885V20z");
}
</style><path class="x-n8inoga"/>`,
		"fallback": "material-symbols-light:desktop-mac-sharp",
	});
}

export default Component;
