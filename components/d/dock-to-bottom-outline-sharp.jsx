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
		"content": `<style>.i3ppf8b7z {
  fill: currentColor;
  d: path("M5 19h14v-3H5zm0-5h14V5H5zm0 2v3zm-2 5V3h18v18z");
}
</style><path class="i3ppf8b7z"/>`,
		"fallback": "material-symbols:dock-to-bottom-outline-sharp",
	});
}

export default Component;
