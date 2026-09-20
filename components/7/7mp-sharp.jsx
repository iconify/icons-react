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
		"content": `<style>.j0t5fudxv {
  fill: currentColor;
  d: path("M11.48 11.192h.982l1.392-4.469v-.915H10v.884h2.889zm-5.172 7h.884v-4.5h1.616v3h.884v-3h1.616v4.5h.884v-5.384H6.308zm7.5 0h.884v-1.5h3v-3.884h-3.884zm.884-2.384v-2.116h2.116v2.116zM4 20V4h16v16z");
}
</style><path class="j0t5fudxv"/>`,
		"fallback": "material-symbols-light:7mp-sharp",
	});
}

export default Component;
