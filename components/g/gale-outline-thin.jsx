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
		"content": `<style>.c5ipzfbmx {
  d: path("M3 6h16");
}

.d8abqfbpc {
  d: path("M3 11h18");
}

.fu2iodbya {
  d: path("M3 16h16");
}

.gv9l4p83m {
  d: path("m21 19 -3 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r_-onzaex {
  d: path("m16 19 -3 3");
}
</style><g class="hntgybcog"><path class="c5ipzfbmx"/><path class="d8abqfbpc"/><path class="fu2iodbya"/><path class="r_-onzaex"/><path class="gv9l4p83m"/></g>`,
		"fallback": "iconmind:gale-outline-thin",
	});
}

export default Component;
