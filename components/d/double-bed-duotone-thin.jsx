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
		"content": `<style>.ei8xo6bpl {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 11V8h5v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.et-iwmblh {
  d: path("M2 18v-7h20v7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hpyzn1uwz {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M13 11V8h5v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hvcr9mbrf {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 14.5h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qitpg1b_y {
  d: path("M13 11V8h5v3");
}

.rc8xkcb_g {
  d: path("M4 11V8h5v3");
}

.wg1ykyaxv {
  d: path("M2 14.5h20");
}

.zdeiv7bia {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 18v-7h20v7");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="zdeiv7bia"/><path class="hvcr9mbrf"/><path class="ei8xo6bpl"/><path class="hpyzn1uwz"/><path class="et-iwmblh"/><path class="wg1ykyaxv"/><path class="rc8xkcb_g"/><path class="qitpg1b_y"/></g>`,
		"fallback": "iconmind:double-bed-duotone-thin",
	});
}

export default Component;
