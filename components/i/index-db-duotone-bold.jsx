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
		"content": `<style>.edllzuogn {
  fill: currentColor;
  d: path("M14.5 4H17a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H7a3 3 0 0 1 -3 -3V8l4 -4h2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.iaozfqbuj {
  d: path("M14.5 4H17a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H7a3 3 0 0 1 -3 -3V8l4 -4h2.5");
}

.jlpxneb5g {
  d: path("M9 8v8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wdz1ifmrg {
  d: path("M9 12h7");
}

.xsa445osm {
  d: path("M9 15h7");
}

.yr3fnb1ar {
  d: path("M9 9h7");
}
</style><g class="s0phu2bbs"><path class="edllzuogn"/><path class="iaozfqbuj"/><path class="jlpxneb5g"/><path class="yr3fnb1ar"/><path class="wdz1ifmrg"/><path class="xsa445osm"/></g>`,
		"fallback": "iconmind:index-db-duotone-bold",
	});
}

export default Component;
