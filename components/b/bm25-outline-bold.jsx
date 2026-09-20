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
		"content": `<style>.f2_a4gbcx {
  d: path("M2 7a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.he2cqebcu {
  d: path("M2 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.n96__jb1n {
  d: path("M6 12h11");
}

.o24qh25eq {
  d: path("M2 17a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.ov2ejkbhi {
  d: path("M6 17h7");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.s13m_784z {
  d: path("M6 7h15");
}
</style><g class="s0phu2bbs"><path class="f2_a4gbcx"/><path class="s13m_784z"/><path class="he2cqebcu"/><path class="n96__jb1n"/><path class="o24qh25eq"/><path class="ov2ejkbhi"/></g>`,
		"fallback": "iconmind:bm25-outline-bold",
	});
}

export default Component;
