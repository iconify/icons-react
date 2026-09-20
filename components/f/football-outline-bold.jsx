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
		"content": `<style>.jlpnm02dj {
  d: path("M12 8V3");
}

.o_ssmh9ez {
  d: path("M3 12a9 9 0 1 0 18 0 9 9 0 1 0 -18 0");
}

.rd9126b2a {
  d: path("m16 12 3 -3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.zwbbmtbru {
  d: path("m12 8 4 4 -4 4 -4 -4Z");
}
</style><g class="s0phu2bbs"><path class="o_ssmh9ez"/><path class="zwbbmtbru"/><path class="jlpnm02dj"/><path class="rd9126b2a"/></g>`,
		"fallback": "iconmind:football-outline-bold",
	});
}

export default Component;
