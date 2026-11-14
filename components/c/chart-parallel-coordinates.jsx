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
		"content": `<style>.jug4q_r3a {
  d: path("m3.5 17.5l8.5-9l8.5 7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w-4-9m5pi {
  d: path("M3.5 3v18M12 3v18m8.5-18v18M3.5 6.5l8.5 10L20.5 8");
}
</style><g class="ulnmmdpxh"><path class="w-4-9m5pi"/><path class="jug4q_r3a"/></g>`,
		"fallback": "uix-sharp:chart-parallel-coordinates",
	});
}

export default Component;
