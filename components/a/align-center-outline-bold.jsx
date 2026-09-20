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
		"content": `<style>.ite_ehtoh {
  d: path("M4.5 18h15");
}

.qt4afwy9g {
  d: path("M6.5 12h11");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.xgrfb-bqu {
  d: path("M3 6h18");
}
</style><g class="s0phu2bbs"><path class="xgrfb-bqu"/><path class="qt4afwy9g"/><path class="ite_ehtoh"/></g>`,
		"fallback": "iconmind:align-center-outline-bold",
	});
}

export default Component;
