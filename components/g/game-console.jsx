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
		"content": `<style>.c85j5tb5h {
  d: path("M9.375 2.5h5.25A4.375 4.375 0 0 1 19 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-5.25A4.375 4.375 0 0 1 5 17.125V6.875A4.375 4.375 0 0 1 9.375 2.5");
}

.dct4mh-qo {
  d: path("M9.75 5.5h4.5A1.75 1.75 0 0 1 16 7.25v2.5a1.75 1.75 0 0 1-1.75 1.75h-4.5A1.75 1.75 0 0 1 8 9.75v-2.5A1.75 1.75 0 0 1 9.75 5.5m-.25 9v4m-2-2h4m4.25-1h.01M14 18h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="c85j5tb5h"/><path class="dct4mh-qo"/></g>`,
		"fallback": "uix:game-console",
	});
}

export default Component;
