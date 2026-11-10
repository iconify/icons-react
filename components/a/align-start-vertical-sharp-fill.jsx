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

.rtmaf_r8s {
  d: path("M3 1V23H1V1H3ZM22 13C22.552 13 23 13.448 23 14V20C23 20.552 22.552 21 22 21H6C5.448 21 5 20.552 5 20V14C5 13.448 5.448 13 6 13H22Z");
}

.ynm9pibox {
  d: path("M14 3C14.552 3 15 3.448 15 4V10C15 10.552 14.552 11 14 11H6C5.448 11 5 10.552 5 10V4C5 3.448 5.448 3 6 3H14Z");
}
</style><g class="cuyn6tgcc"><path class="rtmaf_r8s"/><path class="ynm9pibox"/></g>`,
		"fallback": "keyline-icons:align-start-vertical-sharp-fill",
	});
}

export default Component;
