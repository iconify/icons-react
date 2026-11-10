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

.jo9n-jv0u {
  d: path("M23 1V23H21V1H23Z");
}

.w0bu5yw5k {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M18 13C18.552 13 19 13.448 19 14V20C19 20.552 18.552 21 18 21H2C1.448 21 1 20.552 1 20V14C1 13.448 1.448 13 2 13H18ZM18 3C18.552 3 19 3.448 19 4V10C19 10.552 18.552 11 18 11H10C9.448 11 9 10.552 9 10V4C9 3.448 9.448 3 10 3H18Z");
}
</style><g class="cuyn6tgcc"><path class="w0bu5yw5k"/><path class="jo9n-jv0u"/></g>`,
		"fallback": "keyline-icons:align-end-vertical-sharp-duotone",
	});
}

export default Component;
