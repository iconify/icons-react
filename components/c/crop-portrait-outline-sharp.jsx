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
		"content": `<style>.ws6j20laj {
  fill: currentColor;
  d: path("M5 21V3h14v18zm1-1h12V4H6zm0 0V4z");
}
</style><path class="ws6j20laj"/>`,
		"fallback": "material-symbols-light:crop-portrait-outline-sharp",
	});
}

export default Component;
