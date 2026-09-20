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
		"content": `<style>.zs7luy4_a {
  fill: currentColor;
  d: path("M6.808 11.192h3.884v-.884h-3V8.885h3V5.808H6.808v.884h3v1.424h-3zm8.923 0h.885v-1.5h1.23v-.884h-1.23v-3h-.885v3h-1.885v-3h-.884v3.884h2.769zm-9.423 7h.884v-4.5h1.616v3h.884v-3h1.616v4.5h.884v-5.384H6.308zm7.5 0h.884v-1.5h3v-3.884h-3.884zm.884-2.384v-2.116h2.116v2.116zM4 20V4h16v16z");
}
</style><path class="zs7luy4_a"/>`,
		"fallback": "material-symbols-light:24mp-sharp",
	});
}

export default Component;
