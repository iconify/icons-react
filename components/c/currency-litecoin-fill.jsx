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
		"content": `<style>.vhcx4ioui {
  fill: currentColor;
  d: path("M10 5v6.382l2.553-1.276a1 1 0 1 1 .894 1.788L10 13.618V18h9a1 1 0 0 1 0 2H9a1 1 0 0 1-1-1v-4.382l-2.553 1.276a1 1 0 1 1-.894-1.788L8 12.382V5a1 1 0 0 1 2 0");
}
</style><path class="vhcx4ioui"/>`,
		"fallback": "coolicons:currency-litecoin-fill",
	});
}

export default Component;
