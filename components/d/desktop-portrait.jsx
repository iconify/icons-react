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
		"content": `<style>.ayu7_xblb {
  fill: currentColor;
  d: path("M11.154 17.616h4.462V9.154h-4.462zM8.384 15h.885V7.27h3.5v-.886H8.385zM19 19.385q0 .69-.462 1.153T17.384 21H6.616q-.691 0-1.153-.462T5 19.385V4.615q0-.69.463-1.152T6.616 3h10.769q.69 0 1.153.463T19 4.616z");
}
</style><path class="ayu7_xblb"/>`,
		"fallback": "material-symbols-light:desktop-portrait",
	});
}

export default Component;
