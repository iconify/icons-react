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
		"content": `<style>.l6n6noo0n {
  d: path("M12 2.5s7 7.5 7 12a7 7 0 0 1-14 0c0-4.5 7-12 7-12Z");
}

.qneyrr7wx {
  d: path("M9 17.5q0-6 6-6q0 6-6 6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l6n6noo0n"/><path class="qneyrr7wx"/></g>`,
		"fallback": "uix-sharp:biofuel",
	});
}

export default Component;
