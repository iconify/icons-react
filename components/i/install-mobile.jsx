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
		"content": `<style>.op2bsvbbo {
  fill: currentColor;
  d: path("M7.616 22q-.691 0-1.153-.462T6 20.385V3.615q0-.69.463-1.152T7.616 2h6.461v3.5H7v13h10v-2h1v3.885q0 .69-.462 1.152T16.384 22zM18 13.289L13.692 8.98l.708-.708l3.1 3.1V3.5h1v7.873l3.1-3.1l.708.708z");
}
</style><path class="op2bsvbbo"/>`,
		"fallback": "material-symbols-light:install-mobile",
	});
}

export default Component;
