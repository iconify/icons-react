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
		"content": `<style>.i053ffbpq {
  fill: currentColor;
  d: path("M15 9h6v6h-6Z");
}

.jcg2xu7sp {
  d: path("M9 3h6v6h6v6h-6v6H9v-6H3V9h6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jcg2xu7sp"/><path class="i053ffbpq"/></g>`,
		"fallback": "uix-sharp:dpad-right",
	});
}

export default Component;
