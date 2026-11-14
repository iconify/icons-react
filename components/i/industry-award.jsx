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
		"content": `<style>.mxzl1tbmo {
  d: path("M5.5 9.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0Z");
}

.t_5zpcc4v {
  d: path("M8.5 15L7 21.5L9.5 20l2.5 1.5l2.5-1.5l2.5 1.5l-1.5-6.5M12 6l1.029 2.084l2.3.334l-1.665 1.623l.393 2.291L12 11.25l-2.057 1.082l.393-2.291l-1.665-1.623l2.3-.334Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mxzl1tbmo"/><path class="t_5zpcc4v"/></g>`,
		"fallback": "uix-sharp:industry-award",
	});
}

export default Component;
