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
		"content": `<style>.d5czi6rdr {
  d: path("M3 4a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.d6swx-tss {
  d: path("M14 12.5v6");
}

.g7cpaab_q {
  d: path("m6 9 3 -3 3 3 2 -2 2 2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mv2puevlj {
  d: path("M10 12.5v6");
}

.uw3g4ocav {
  fill: currentColor;
  d: path("M3 4a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.yy0_ngbbe {
  d: path("M7.5 15.5h9");
}
</style><g class="hntgybcog"><path class="uw3g4ocav"/><path class="d5czi6rdr"/><path class="g7cpaab_q"/><path class="mv2puevlj"/><path class="d6swx-tss"/><path class="yy0_ngbbe"/></g>`,
		"fallback": "iconmind:batch-number-duotone-thin",
	});
}

export default Component;
