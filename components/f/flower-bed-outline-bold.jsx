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
		"content": `<style>.gf_3phz1c {
  d: path("M16 14v4");
}

.n0hr0gbrt {
  d: path("M14 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.o8od38cnm {
  d: path("M4 18h16");
}

.of_dlbc-j {
  d: path("M6 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.pma7fkjmg {
  d: path("M8 11v7");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="o8od38cnm"/><path class="of_dlbc-j"/><path class="pma7fkjmg"/><path class="n0hr0gbrt"/><path class="gf_3phz1c"/></g>`,
		"fallback": "iconmind:flower-bed-outline-bold",
	});
}

export default Component;
