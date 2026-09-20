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
		"content": `<style>.ei8gh2b1p {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 8h14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gd8l1w4ql {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m10 11.5 2 2 2 -2");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.isrhyfbxd {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 17h13");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.isrkj8blm {
  d: path("M3 17h13");
}

.orxbg_b1j {
  d: path("M3 4h13");
}

.rdidnh2az {
  d: path("m10 11.5 2 2 2 -2");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t_iz9qbpi {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 4h13");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zuuudpbwi {
  d: path("M3 8h14");
}
</style><g class="s0phu2bbs"><path class="t_iz9qbpi"/><path class="ei8gh2b1p"/><path class="gd8l1w4ql"/><path class="isrhyfbxd"/><path class="orxbg_b1j"/><path class="zuuudpbwi"/><path class="rdidnh2az"/><path class="isrkj8blm"/></g>`,
		"fallback": "iconmind:dedupe-fuzzy-duotone-bold",
	});
}

export default Component;
