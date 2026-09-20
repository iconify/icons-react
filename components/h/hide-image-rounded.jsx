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
		"content": `<style>.e7dxnsb3n {
  fill: currentColor;
  d: path("M21 5v10.725q0 .35-.175.575t-.45.35t-.55.088t-.525-.288L7.55 4.7q-.25-.25-.287-.525t.087-.55t.35-.45T8.275 3H19q.825 0 1.413.587T21 5M5 21q-.825 0-1.412-.587T3 19V5.8l-.9-.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l17 17q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-.9-.9zm9.175-4l-2.1-2.1l-.825 1.1l-1.85-2.475q-.15-.2-.4-.2t-.4.2l-2 2.675q-.2.25-.05.525T7 17z");
}
</style><path class="e7dxnsb3n"/>`,
		"fallback": "material-symbols:hide-image-rounded",
	});
}

export default Component;
