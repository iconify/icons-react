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
		"content": `<style>.aiuhe2bla {
  d: path("M3.5 15a4.5 4.5 0 0 1 9 0");
}

.ay2m_8giq {
  fill: currentColor;
  d: path("m13 17 5 -5 2 2 -5 5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.bstg2h-sl {
  fill: currentColor;
  d: path("M5 6a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p14ufobya {
  d: path("m13 17 5 -5 2 2 -5 5Z");
}

.t_m3g48-w {
  d: path("M5 6a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}
</style><g class="hntgybcog"><path class="bstg2h-sl"/><path class="ay2m_8giq"/><path class="t_m3g48-w"/><path class="aiuhe2bla"/><path class="p14ufobya"/></g>`,
		"fallback": "iconmind:author-duotone-thin",
	});
}

export default Component;
