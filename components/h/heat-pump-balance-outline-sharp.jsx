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
		"content": `<style>.rza03q0xx {
  fill: currentColor;
  d: path("M4 6.6h2v10h2v-10h6v10h2v-11h4.175L19 4.425L20.4 3L24 6.6l-3.6 3.575L19 8.75l1.175-1.15H18v11h-6v-10h-2v10H4zm-3 15v-10h22v10zm2-2h18v-6H3zm18-6H3z");
}
</style><path class="rza03q0xx"/>`,
		"fallback": "material-symbols:heat-pump-balance-outline-sharp",
	});
}

export default Component;
