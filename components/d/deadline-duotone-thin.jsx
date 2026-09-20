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
		"content": `<style>.ash0fb4la {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M21 3v18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.crhlkwb-w {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12.96 5.66a7 7 0 1 1 -5.92 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.fhbl5kbmk {
  d: path("M21 3v18");
}

.g5cem-5df {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M10 12h5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gz6__nv8t {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M10 7v5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oe2u-obal {
  d: path("M12.96 5.66a7 7 0 1 1 -5.92 0");
}

.qaaffjxln {
  d: path("M10 12h5");
}

.u4_zcfcdm {
  d: path("M10 7v5");
}
</style><g class="hntgybcog"><path class="crhlkwb-w"/><path class="gz6__nv8t"/><path class="g5cem-5df"/><path class="ash0fb4la"/><path class="oe2u-obal"/><path class="u4_zcfcdm"/><path class="qaaffjxln"/><path class="fhbl5kbmk"/></g>`,
		"fallback": "iconmind:deadline-duotone-thin",
	});
}

export default Component;
