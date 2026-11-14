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
		"content": `<style>.qm0glrbsl {
  d: path("M4.5 5.5H17l4.5 4.5v6.5a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vytnguc9x {
  d: path("M17 5.5V8a2 2 0 0 0 2 2h2.5");
}
</style><g class="ulnmmdpxh"><path class="qm0glrbsl"/><path class="vytnguc9x"/></g>`,
		"fallback": "uix-sharp:card",
	});
}

export default Component;
