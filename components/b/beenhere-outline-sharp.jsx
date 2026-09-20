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
		"content": `<style>.xqr3ngbsa {
  fill: currentColor;
  d: path("m12 23l-8-6V2h16v15zm0-2.5l6-4.5V4H6v12zM10.95 15l5.65-5.65l-1.4-1.45l-4.25 4.25l-2.1-2.1l-1.45 1.4zM12 4H6h12z");
}
</style><path class="xqr3ngbsa"/>`,
		"fallback": "material-symbols:beenhere-outline-sharp",
	});
}

export default Component;
