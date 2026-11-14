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
		"content": `<style>.j_qsqhbdd {
  d: path("M6 9.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm6.5-1h5m-5 3.5h3m-.75 6l2 2L21 15.75");
}

.reo2tm3sp {
  d: path("M11.3 17.5H2.5v-14h19v8.8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="reo2tm3sp"/><path class="j_qsqhbdd"/></g>`,
		"fallback": "uix-sharp:access-control",
	});
}

export default Component;
