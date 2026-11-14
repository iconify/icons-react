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

.i3h28n8bt {
  d: path("M9.5 13.25C9.5 11 8 9 8 6.5a4 4 0 0 1 8 0c0 2.5-1.5 4.5-1.5 6.75");
}

.j467cabmv {
  d: path("M4 15.5a8 2.5 0 1 0 16 0a8 2.5 0 1 0-16 0");
}

.mv0k71b7r {
  d: path("M4 15.5v3a8 2.5 0 0 0 16 0v-3");
}
</style><g class="hntgybcog"><path class="i3h28n8bt"/><path class="j467cabmv"/><path class="mv0k71b7r"/></g>`,
		"fallback": "uix:coffee-tamper",
	});
}

export default Component;
