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
		"content": `<style>.ghpezkxlh {
  d: path("M15 7a3 3 0 0 1 0 6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v3xsaib0o {
  d: path("M2 19h15");
}

.zkx1g3b3t {
  d: path("M4 7v9h11V7");
}
</style><g class="hntgybcog"><path class="zkx1g3b3t"/><path class="ghpezkxlh"/><path class="v3xsaib0o"/></g>`,
		"fallback": "iconmind:coffee-cup-outline-thin",
	});
}

export default Component;
