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
		"content": `<style>.vdwv_hr3x {
  fill: currentColor;
  d: path("M1.5 20.5v-3.288l2-2V8.789l-2-2V3.5h1v2h3v-2h1v2h3v-2h1v3.289l-2 2V10.5h7V8.789l-2-2V3.5h1v2h3v-2h1v2h3v-2h1v3.289l-2 2v6.423l2 2V20.5h-8V18q0-1.031-.735-1.766q-.736-.734-1.769-.734t-1.764.735Q9.5 16.969 9.5 18v2.5zm1-1h6V18q0-1.458 1.021-2.479T12 14.5t2.479 1.021T15.5 18v1.5h6v-1.886l-2-2V8.386L21.387 6.5h-6.773L16.5 8.386V11.5h-9V8.387L9.386 6.5H2.614L4.5 8.386v7.228l-2 2zM12 13");
}
</style><path class="vdwv_hr3x"/>`,
		"fallback": "material-symbols-light:fort-outline",
	});
}

export default Component;
