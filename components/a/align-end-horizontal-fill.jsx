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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.rvjfvqbaj {
  d: path("M22 21C22.552 21 23 21.448 23 22C23 22.552 22.552 23 22 23H2C1.4477 23 1 22.552 1 22C1 21.448 1.4477 21 2 21H22ZM8 1C9.6569 1 11 2.343 11 4V16C11 17.657 9.6568 19 8 19H6C4.3432 19 3 17.657 3 16V4C3 2.343 4.3431 1 6 1H8Z");
}

.yzuu68b0r {
  d: path("M18 9C19.6569 9 21 10.343 21 12V16C21 17.657 19.6569 19 18 19H16C14.3431 19 13 17.657 13 16V12C13 10.343 14.3431 9 16 9H18Z");
}
</style><g class="cuyn6tgcc"><path class="rvjfvqbaj"/><path class="yzuu68b0r"/></g>`,
		"fallback": "keyline-icons:align-end-horizontal-fill",
	});
}

export default Component;
