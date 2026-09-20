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
		"content": `<style>.h1pc88gbr {
  fill: currentColor;
  d: path("M7 12.539V20.5q0 .213-.144.356T6.499 21t-.356-.144T6 20.5V4.808q0-.343.232-.576T6.808 4h11.89q.218 0 .4.103t.289.267t.126.373t-.087.423l-1.522 3.103l1.522 3.103q.105.214.087.423t-.126.373t-.29.268q-.182.102-.399.102zm0-1h11.416L17.15 8.98q-.17-.333-.17-.712q0-.38.17-.711L18.416 5H7zm0 0V5z");
}
</style><path class="h1pc88gbr"/>`,
		"fallback": "material-symbols-light:flag-2-outline-rounded",
	});
}

export default Component;
