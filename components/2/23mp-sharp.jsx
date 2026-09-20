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
		"content": `<style>.tg29ls9uc {
  fill: currentColor;
  d: path("M6.808 11.192h3.884v-.884h-3V8.885h3V5.808H6.808v.884h3v1.424h-3zm6.115 0h3.885V5.808h-3.885v.884h3v1.424h-2v.769h2v1.423h-3zm-6.615 7h.884v-4.5h1.616v3h.884v-3h1.616v4.5h.884v-5.384H6.308zm7.5 0h.884v-1.5h3v-3.884h-3.884zm.884-2.384v-2.116h2.116v2.116zM4 20V4h16v16z");
}
</style><path class="tg29ls9uc"/>`,
		"fallback": "material-symbols-light:23mp-sharp",
	});
}

export default Component;
