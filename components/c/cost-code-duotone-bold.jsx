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
		"content": `<style>.c4khiwgvb {
  d: path("M8 15h8");
}

.ghf6zpb7j {
  d: path("M14 12v6");
}

.k7u-15-va {
  d: path("M10 12v6");
}

.q8pkiebhf {
  fill: currentColor;
  d: path("M9.5 4h5v2.5L18 10a7 7 0 1 1 -12 0l3.5 -3.5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.y7d97_qtf {
  d: path("M9.5 4h5v2.5L18 10a7 7 0 1 1 -12 0l3.5 -3.5Z");
}
</style><g class="s0phu2bbs"><path class="q8pkiebhf"/><path class="y7d97_qtf"/><path class="k7u-15-va"/><path class="ghf6zpb7j"/><path class="c4khiwgvb"/></g>`,
		"fallback": "iconmind:cost-code-duotone-bold",
	});
}

export default Component;
