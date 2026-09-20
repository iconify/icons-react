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
		"content": `<style>.c0j1whzwq {
  d: path("M3 11h12c0 5 -3 8 -6 8s-6 -3 -6 -8");
}

.ev5f2vbwt {
  fill: currentColor;
  d: path("M3 11h12c0 5 -3 8 -6 8s-6 -3 -6 -8");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.pdahcqbfu {
  d: path("m15 11 6 -6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="ev5f2vbwt"/><path class="c0j1whzwq"/><path class="pdahcqbfu"/></g>`,
		"fallback": "iconmind:frying-pan-duotone-bold",
	});
}

export default Component;
