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
		"content": `<style>.t0x0byb1x {
  fill: currentColor;
  d: path("M8 16h8V8H8zm-5 5V3h18v18zm2-2h14V5H5zm0 0V5z");
}
</style><path class="t0x0byb1x"/>`,
		"fallback": "material-symbols:dialogs-outline-sharp",
	});
}

export default Component;
