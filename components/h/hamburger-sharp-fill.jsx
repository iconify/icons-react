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
		"content": `<style>.dl-8nrxis {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3.0549 10C3.5524 5.5 7.3674 2 12 2C16.6326 2 20.4476 5.5 20.9451 10L3.0549 10ZM1 12L23 12L23 16L1 16L1 12ZM21 18L21 21C21 21.5523 20.5523 22 20 22L4 22C3.4477 22 3 21.5523 3 21L3 18L21 18Z");
}
</style><path clip-rule="evenodd" class="dl-8nrxis"/>`,
		"fallback": "keyline-icons:hamburger-sharp-fill",
	});
}

export default Component;
