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
		"content": `<style>.so-tf9xcs {
  fill: currentColor;
  d: path("M1.5 20.5v-3.288l2-2V8.789l-2-2V3.5h1v2h3v-2h1v2h3v-2h1v3.289l-2 2V10.5h7V8.789l-2-2V3.5h1v2h3v-2h1v2h3v-2h1v3.289l-2 2v6.423l2 2V20.5h-8v-5h-5v5z");
}
</style><path class="so-tf9xcs"/>`,
		"fallback": "material-symbols-light:fort-sharp",
	});
}

export default Component;
