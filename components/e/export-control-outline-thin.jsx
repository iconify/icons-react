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
		"content": `<style>.e0newffle {
  d: path("M3 10a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mzs9lvbbs {
  d: path("M19.5 4v16");
}

.nrwhfkuns {
  d: path("M14 12h2.5");
}
</style><g class="hntgybcog"><path class="e0newffle"/><path class="nrwhfkuns"/><path class="mzs9lvbbs"/></g>`,
		"fallback": "iconmind:export-control-outline-thin",
	});
}

export default Component;
