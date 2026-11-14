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
		"content": `<style>.palkn4bro {
  d: path("M5.5 19.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm9 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.qos0lcbtt {
  d: path("M3 7.5L5 4h14l2 3.5Zm1.5 0h15l-1 10h-13Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qos0lcbtt"/><path class="palkn4bro"/></g>`,
		"fallback": "uix-sharp:communal-bin",
	});
}

export default Component;
