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
		"content": `<style>.gueuxsb1h {
  fill: currentColor;
  d: path("M1 18L1 13C1 11.3431 2.3431 10 4 10L4 6C4 4.3431 5.3431 3 7 3L17 3C18.6569 3 20 4.3431 20 6L20 10C21.6569 10 23 11.3431 23 13L23 18C23 19.6569 21.6569 21 20 21L4 21C2.3431 21 1 19.6569 1 18ZM4 12C3.4477 12 3 12.4477 3 13L3 14L11 14L11 12L4 12ZM13 12L13 14L21 14L21 13C21 12.4477 20.5523 12 20 12L13 12Z");
}
</style><path class="gueuxsb1h"/>`,
		"fallback": "keyline-icons:bed-double-fill",
	});
}

export default Component;
