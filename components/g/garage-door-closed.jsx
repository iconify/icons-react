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
		"content": `<style>.qjipqpzot {
  d: path("M12.344 19.5H2.5v-10L11 2.25l8.5 7.25v3.856");
}

.qwufe_ayo {
  d: path("M5.5 19.5v-8.25h11v4.55M5.5 14h11m-11 2.75h6.6M14.75 18l2 2L21 15.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qjipqpzot"/><path class="qwufe_ayo"/></g>`,
		"fallback": "uix-sharp:garage-door-closed",
	});
}

export default Component;
