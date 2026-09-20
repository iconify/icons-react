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
		"content": `<style>.ctu1u6bpi {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m2 14 3 3 5 -5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.g7qu0vb4t {
  d: path("M21 14v4");
}

.ghf6zpb7j {
  d: path("M14 12v6");
}

.moe6ixtob {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M21 14v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vddehgbmg {
  d: path("m2 14 3 3 5 -5");
}

.vr8t6yplh {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M17.5 8v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.x0qn9gsac {
  d: path("M17.5 8v10");
}

.y5d_59vhw {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M14 12v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="ctu1u6bpi"/><path class="y5d_59vhw"/><path class="vr8t6yplh"/><path class="moe6ixtob"/><path class="vddehgbmg"/><path class="ghf6zpb7j"/><path class="x0qn9gsac"/><path class="g7qu0vb4t"/></g>`,
		"fallback": "iconmind:confidence-score-duotone-bold",
	});
}

export default Component;
