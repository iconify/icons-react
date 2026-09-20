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
		"content": `<style>.km9uii_ku {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 3v18M4 6h16M4 18h16m0 -15v18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lxtc-wp5b {
  d: path("m10 10 4 4");
}

.ri2m-q_tv {
  d: path("M4 3v18M4 6h16M4 18h16m0 -15v18");
}

.s-cqkabbd {
  d: path("m14 10 -4 4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tx6qscbul {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m14 10 -4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.v_e4fzbym {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m10 10 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="km9uii_ku"/><path class="v_e4fzbym"/><path class="tx6qscbul"/><path class="ri2m-q_tv"/><path class="lxtc-wp5b"/><path class="s-cqkabbd"/></g>`,
		"fallback": "iconmind:deploy-reject-duotone-bold",
	});
}

export default Component;
