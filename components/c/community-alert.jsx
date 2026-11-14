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
		"content": `<style>.syy8l3bre {
  d: path("m18 13.75l3.75 7.5h-7.5Zm0 3.5V19");
}

.udkqpz7sn {
  d: path("M2.5 10.5L7 6l4.5 4.5v8h-9Zm10.028 8H11.5v-10L16 4l4.5 4.5v4.072");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="udkqpz7sn"/><path class="syy8l3bre"/></g>`,
		"fallback": "uix-sharp:community-alert",
	});
}

export default Component;
