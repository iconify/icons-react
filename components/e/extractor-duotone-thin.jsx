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
		"content": `<style>.cfyvl-o0i {
  d: path("M16 12h4");
}

.g2qe3ubhz {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M9 8h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.g9u082bkk {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M13 2H6v19h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gv3gpab3b {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m17 9 3 3 -3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iu3j18b-o {
  d: path("M9 8h4");
}

.izkbhz86a {
  d: path("M9 12h4");
}

.mi_m6achy {
  d: path("m17 9 3 3 -3 3");
}

.o7xcj9b5m {
  d: path("M13 2H6v19h8");
}

.q3dlgtfea {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M9 12h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.rzyhl__ak {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M16 12h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="g9u082bkk"/><path class="g2qe3ubhz"/><path class="q3dlgtfea"/><path class="rzyhl__ak"/><path class="gv3gpab3b"/><path class="o7xcj9b5m"/><path class="iu3j18b-o"/><path class="izkbhz86a"/><path class="cfyvl-o0i"/><path class="mi_m6achy"/></g>`,
		"fallback": "iconmind:extractor-duotone-thin",
	});
}

export default Component;
