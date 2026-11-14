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
		"content": `<style>.biobd2i1s {
  d: path("M12.829 8.085L14 7.5a1.382 1.382 0 0 1 2 1.236v6.528a1.382 1.382 0 0 1-2 1.236l-1.171-.585A1.5 1.5 0 0 1 12 14.573V9.427a1.5 1.5 0 0 1 .829-1.342M18.5 9L21 7.5M18.5 12h3m-3 3l2.5 1.5");
}

.dm410cc5n {
  d: path("M5 9.5h4.5A2.5 2.5 0 0 1 12 12a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 12A2.5 2.5 0 0 1 5 9.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="dm410cc5n"/><path class="biobd2i1s"/></g>`,
		"fallback": "uix:emergency-flashlight",
	});
}

export default Component;
