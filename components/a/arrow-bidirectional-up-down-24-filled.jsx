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
		"content": `<style>.wex59nkof {
  fill: currentColor;
  d: path("M7.975 9.689a1 1 0 1 1-1.45-1.378l4.75-5a1 1 0 0 1 1.45 0l4.75 5a1 1 0 1 1-1.45 1.378L13 6.505v10.99l3.025-3.184a1 1 0 1 1 1.45 1.378l-4.75 5a1 1 0 0 1-1.45 0l-4.75-5a1 1 0 1 1 1.45-1.378L11 17.496V6.505z");
}
</style><path class="wex59nkof"/>`,
		"fallback": "fluent:arrow-bidirectional-up-down-24-filled",
	});
}

export default Component;
