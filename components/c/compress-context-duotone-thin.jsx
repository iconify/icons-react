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
		"content": `<style>.b4x_isbqv {
  d: path("M8 6H5v12h3");
}

.d_6ujebpi {
  d: path("M16 6h3v12h-3");
}

.e6eri9pjq {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M8 6H5v12h3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hu1l55dbx {
  d: path("M9.5 15.5 12 13l2.5 2.5");
}

.n_1n94xtx {
  d: path("M9.5 8.5 12 11l2.5 -2.5");
}

.puve50t9i {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M9.5 8.5 12 11l2.5 -2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.r_b50rbgh {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M9.5 15.5 12 13l2.5 2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ta4vmeb9o {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M16 6h3v12h-3");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="e6eri9pjq"/><path class="ta4vmeb9o"/><path class="puve50t9i"/><path class="r_b50rbgh"/><path class="b4x_isbqv"/><path class="d_6ujebpi"/><path class="n_1n94xtx"/><path class="hu1l55dbx"/></g>`,
		"fallback": "iconmind:compress-context-duotone-thin",
	});
}

export default Component;
