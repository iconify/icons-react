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
		"content": `<style>.bi05fgdse {
  fill: currentColor;
  d: path("M2.5 8.5h8c1.5 1.5 1.5 5.5 0 7h-8Z");
}

.e33mucbcs {
  d: path("M14 12h5.5m-2-2l2 2l-2 2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.stjez5bxy {
  d: path("M2.5 6h19m-19 12h19");
}
</style><g class="hntgybcog"><path class="stjez5bxy"/><path class="bi05fgdse"/><path class="e33mucbcs"/></g>`,
		"fallback": "uix:contrast-dye",
	});
}

export default Component;
