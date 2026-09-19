import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gba_v4kal {
  fill: currentColor;
  d: path("M29 50.54h6V62h-6zM29 2h6v11.46h-6zm21.539 27H62v6H50.539zM2 29h11.461v6H2zm10.909 26.335l-4.242-4.243l8.104-8.102l4.242 4.243zM51.091 8.666l4.242 4.243l-8.104 8.102l-4.242-4.243zm-.004 46.669l-8.104-8.104l4.243-4.243l8.104 8.104zM16.769 21.013l-8.104-8.104l4.242-4.243l8.104 8.104zM32 17c-8.284 0-15 6.716-15 15s6.716 15 15 15s15-6.716 15-15s-6.716-15-15-15m0 25c-5.522 0-10-4.478-10-10s4.478-10 10-10s10 4.478 10 10s-4.478 10-10 10");
}
</style><path class="gba_v4kal"/>`,
		"fallback": "emojione-monotone:bright-button",
	});
}

export default Component;
