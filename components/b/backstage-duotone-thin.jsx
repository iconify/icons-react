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
		"content": `<style>.c7dgfu7wx {
  d: path("M2 4h20");
}

.ek2x1ibhe {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 4v17h2.5C7 21 7 20 7 18V4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.fk1mncnjn {
  d: path("M21 4v17h-2.5C17 21 17 20 17 18V4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j-78g1vvy {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M10 21v-9h4v9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ljo-5rbrq {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 4h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.m46vgkb_g {
  d: path("M3 4v17h2.5C7 21 7 20 7 18V4");
}

.wkhnrbc8z {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M21 4v17h-2.5C17 21 17 20 17 18V4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xogm81bqq {
  d: path("M10 21v-9h4v9");
}
</style><g class="hntgybcog"><path class="ljo-5rbrq"/><path class="ek2x1ibhe"/><path class="wkhnrbc8z"/><path class="j-78g1vvy"/><path class="c7dgfu7wx"/><path class="m46vgkb_g"/><path class="fk1mncnjn"/><path class="xogm81bqq"/></g>`,
		"fallback": "iconmind:backstage-duotone-thin",
	});
}

export default Component;
