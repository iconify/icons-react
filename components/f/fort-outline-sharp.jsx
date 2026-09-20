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
		"content": `<style>.gpprgmyxj {
  fill: currentColor;
  d: path("M1.5 20.5v-3.288l2-2V8.789l-2-2V3.5h1v2h3v-2h1v2h3v-2h1v3.289l-2 2V10.5h7V8.789l-2-2V3.5h1v2h3v-2h1v2h3v-2h1v3.289l-2 2v6.423l2 2V20.5h-8v-5h-5v5zm1-1h6v-5h7v5h6v-1.886l-2-2V8.386L21.387 6.5h-6.773L16.5 8.386V11.5h-9V8.387L9.386 6.5H2.614L4.5 8.386v7.228l-2 2zM12 13");
}
</style><path class="gpprgmyxj"/>`,
		"fallback": "material-symbols-light:fort-outline-sharp",
	});
}

export default Component;
