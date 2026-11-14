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
		"content": `<style>.ej8w_zqvu {
  d: path("M12 3L4.5 17.5a7.5 3 0 0 0 15 0Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xiuxu4a9r {
  d: path("M4.5 17.5a7.5 3 0 0 1 15 0");
}
</style><g class="hntgybcog"><path class="ej8w_zqvu"/><path class="xiuxu4a9r"/></g>`,
		"fallback": "uix:cone",
	});
}

export default Component;
