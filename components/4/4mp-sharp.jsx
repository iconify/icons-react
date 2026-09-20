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
		"content": `<style>.pw18fr2sf {
  fill: currentColor;
  d: path("M12.712 11.192h.884v-1.5h1v-.884h-1v-3h-.884v3h-2.116v-3h-.884v3.884h3zm-6.404 7h.884v-4.5h1.616v3h.884v-3h1.616v4.5h.884v-5.384H6.308zm7.5 0h.884v-1.5h3v-3.884h-3.884zm.884-2.384v-2.116h2.116v2.116zM4 20V4h16v16z");
}
</style><path class="pw18fr2sf"/>`,
		"fallback": "material-symbols-light:4mp-sharp",
	});
}

export default Component;
