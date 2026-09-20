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
		"content": `<style>.gpzsx6dgy {
  d: path("M16.5 10v5");
}

.hnix93blm {
  d: path("M19.68 12.82a4.5 4.5 0 1 1 -6.36 0");
}

.jt4-jw3vg {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M8.69 3.37a4 4 0 1 1 -3.38 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kl1p02gzj {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M19.68 12.82a4.5 4.5 0 1 1 -6.36 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.sa_iv6bha {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M16.5 10v5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.skbifdbcx {
  d: path("M8.69 3.37a4 4 0 1 1 -3.38 0");
}
</style><g class="s0phu2bbs"><path class="jt4-jw3vg"/><path class="kl1p02gzj"/><path class="sa_iv6bha"/><path class="skbifdbcx"/><path class="hnix93blm"/><path class="gpzsx6dgy"/></g>`,
		"fallback": "iconmind:agent-power-duotone-bold",
	});
}

export default Component;
