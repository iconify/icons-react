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
		"content": `<style>.g_h1y7bnw {
  fill: currentColor;
  d: path("M9.594 6.692L7.366 4.45q.159-.113.364-.185q.205-.073.424-.073q.69 0 1.191.501t.501 1.192q0 .219-.069.433t-.183.374M21.2 21.2l-.708.708L16.585 18h-6.82q-.551 0-.945-.332t-.504-.845l-1.177-5.62q-.12-.614.096-1.112q.215-.499.619-.822L2.092 3.508L2.8 2.8z");
}
</style><path class="g_h1y7bnw"/>`,
		"fallback": "material-symbols-light:car-seat-off-sharp",
	});
}

export default Component;
