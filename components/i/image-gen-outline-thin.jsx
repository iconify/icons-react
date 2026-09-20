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
		"content": `<style>.heuuun2cn {
  d: path("m6 17 4 -4 4 4 5 -5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o72p0hsyz {
  d: path("M14 4h4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h4");
}

.yrvt-vb2c {
  d: path("m8 8 2 2 -2 2 -2 -2Z");
}
</style><g class="hntgybcog"><path class="o72p0hsyz"/><path class="heuuun2cn"/><path class="yrvt-vb2c"/></g>`,
		"fallback": "iconmind:image-gen-outline-thin",
	});
}

export default Component;
