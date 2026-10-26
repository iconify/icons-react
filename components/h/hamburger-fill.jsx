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
		"content": `<style>.cgc7kfb0q {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3.0549 10C3.5524 5.5 7.3674 2 12 2C16.6326 2 20.4476 5.5 20.9451 10L3.0549 10ZM3 12L21 12C22.1046 12 23 12.8954 23 14C23 15.1046 22.1046 16 21 16L3 16C1.8954 16 1 15.1046 1 14C1 12.8954 1.8954 12 3 12ZM21 18C21 20.2092 19.2092 22 17 22L7 22C4.7908 22 3 20.2092 3 18L21 18Z");
}
</style><path clip-rule="evenodd" class="cgc7kfb0q"/>`,
		"fallback": "keyline-icons:hamburger-fill",
	});
}

export default Component;
