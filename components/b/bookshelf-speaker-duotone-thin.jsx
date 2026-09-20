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
		"content": `<style>.a46k8ibzd {
  d: path("M7 3v18h10V3Z");
}

.acyg6nb1v {
  d: path("M10 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.bybw7n7fq {
  fill: currentColor;
  d: path("M9 16a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.fsuht_b8c {
  fill: currentColor;
  d: path("M10 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
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

.jz928wudc {
  fill: currentColor;
  d: path("M7 3v18h10V3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.rf0c3ccmk {
  d: path("M9 16a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}
</style><g class="hntgybcog"><path class="jz928wudc"/><path class="fsuht_b8c"/><path class="bybw7n7fq"/><path class="a46k8ibzd"/><path class="acyg6nb1v"/><path class="rf0c3ccmk"/></g>`,
		"fallback": "iconmind:bookshelf-speaker-duotone-thin",
	});
}

export default Component;
