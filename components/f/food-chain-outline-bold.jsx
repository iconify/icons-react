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
		"content": `<style>.bmr2oqbjx {
  d: path("m14 10 2 -2");
}

.j4nym3cre {
  d: path("m6 16 2 -2");
}

.jt7d488ke {
  d: path("M13 7a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.sib4g3mzz {
  d: path("M7 13a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.xq1pi7btv {
  d: path("M2 18a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="s0phu2bbs"><path class="xq1pi7btv"/><path class="sib4g3mzz"/><path class="jt7d488ke"/><path class="j4nym3cre"/><path class="bmr2oqbjx"/></g>`,
		"fallback": "iconmind:food-chain-outline-bold",
	});
}

export default Component;
