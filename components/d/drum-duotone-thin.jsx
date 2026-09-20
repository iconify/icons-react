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
		"content": `<style>.a5tuk3h7e {
  d: path("M4 10h16");
}

.akar2ebka {
  d: path("m18 8 -4 -4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p257n690c {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m6 8 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.rg305wbza {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m18 8 -4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.scwel3iok {
  d: path("m6 8 4 -4");
}

.udvq0abxg {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 10v7h16v-7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xtf0w138e {
  d: path("M4 10v7h16v-7");
}

.y_anpuvsh {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 10h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="udvq0abxg"/><path class="y_anpuvsh"/><path class="p257n690c"/><path class="rg305wbza"/><path class="xtf0w138e"/><path class="a5tuk3h7e"/><path class="scwel3iok"/><path class="akar2ebka"/></g>`,
		"fallback": "iconmind:drum-duotone-thin",
	});
}

export default Component;
