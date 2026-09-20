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
		"content": `<style>.wn_8-16ds {
  fill: currentColor;
  d: path("M2 22v-4.65l8.75-11.8L9 3.2L10.6 2L12 3.875L13.4 2L15 3.2l-1.75 2.35L22 17.35V22zM12 7.225L4 18v2h3l5-7l5 7h3v-2zM9.45 20h5.1L12 16.45zM12 13l5 7zl-5 7z");
}
</style><path class="wn_8-16ds"/>`,
		"fallback": "material-symbols:camping-outline-sharp",
	});
}

export default Component;
