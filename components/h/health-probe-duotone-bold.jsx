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
		"content": `<style>.bpdfs5b6a {
  d: path("m9 15 2 2 4 -4");
}

.cagjfzbtl {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 8h4.5l2 -2 4 4 2 -2H21");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tq4ddlenk {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m9 15 2 2 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vqal-abhe {
  d: path("M3 8h4.5l2 -2 4 4 2 -2H21");
}
</style><g class="s0phu2bbs"><path class="cagjfzbtl"/><path class="tq4ddlenk"/><path class="vqal-abhe"/><path class="bpdfs5b6a"/></g>`,
		"fallback": "iconmind:health-probe-duotone-bold",
	});
}

export default Component;
