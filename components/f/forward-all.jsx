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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n-xf2ebup {
  d: path("m14.75 5.25l5.5 5.5l-5.5 5.5");
}

.q0cubz-en {
  d: path("M20.25 10.75h-9.5a7 7 0 0 0-7 7v1");
}
</style><g class="hntgybcog"><path class="n-xf2ebup"/><path class="q0cubz-en"/></g>`,
		"fallback": "iconoven:forward-all",
	});
}

export default Component;
