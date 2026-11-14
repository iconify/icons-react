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
		"content": `<style>.r6238w_3h {
  d: path("M12.7 19.5H2.5v-15h19V13");
}

.r9eoyh5-b {
  d: path("m3.5 6l8.5 6.5L20.5 6M18 21l-2.75-2.75A2 2 0 0 1 18 15.5a2 2 0 0 1 2.75 2.75Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="r6238w_3h"/><path class="r9eoyh5-b"/></g>`,
		"fallback": "uix-sharp:client-thank-you",
	});
}

export default Component;
