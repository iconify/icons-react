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
		"content": `<style>.a7jkwpy-f {
  d: path("M4 15.5h16a1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 19v-2A1.5 1.5 0 0 1 4 15.5m.5 0l7.5-3l7.5 3m-8-13h1a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 12.5 6h-1a1.75 1.75 0 0 1-1.75-1.75A1.75 1.75 0 0 1 11.5 2.5");
}

.aclrasbzs {
  d: path("M12 6v1.5A2.5 2.5 0 1 1 9.5 10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="a7jkwpy-f"/><path class="aclrasbzs"/></g>`,
		"fallback": "uix:beam-lift",
	});
}

export default Component;
