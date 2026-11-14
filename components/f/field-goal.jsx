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
		"content": `<style>.h1fafmbqp {
  d: path("M5 2.5v9h14v-9m-7 9v10");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vksq-bbsl {
  d: path("M8.5 6a3.5 2.25 0 1 0 7 0a3.5 2.25 0 1 0-7 0Z");
}
</style><g class="ulnmmdpxh"><path class="h1fafmbqp"/><path class="vksq-bbsl"/></g>`,
		"fallback": "uix-sharp:field-goal",
	});
}

export default Component;
