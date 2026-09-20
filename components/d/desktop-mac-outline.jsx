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
		"content": `<style>.r_nyr454t {
  fill: currentColor;
  d: path("M9.27 20v-.77l1.884-1.884H4.616q-.691 0-1.153-.462T3 15.73V5.616q0-.691.463-1.153T4.615 4h14.77q.69 0 1.152.463T21 5.616V15.73q0 .69-.463 1.153t-1.153.462h-6.538l1.885 1.885V20zM4 14.846h16v-9.23q0-.231-.192-.424T19.385 5H4.615q-.23 0-.423.192T4 5.616zm0 0V5z");
}
</style><path class="r_nyr454t"/>`,
		"fallback": "material-symbols-light:desktop-mac-outline",
	});
}

export default Component;
