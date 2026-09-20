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
		"content": `<style>.c4my-jbpv {
  d: path("M2 5a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.ha2bk5bpt {
  d: path("M2 15a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.jaql6vb1s {
  d: path("m14 14.5 -4 4");
}

.l7-tgmbes {
  d: path("m10 14.5 4 4");
}

.qkea2dbiu {
  d: path("M5 6.5h14");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="c4my-jbpv"/><path class="qkea2dbiu"/><path class="ha2bk5bpt"/><path class="l7-tgmbes"/><path class="jaql6vb1s"/></g>`,
		"fallback": "iconmind:anomaly-data-outline-bold",
	});
}

export default Component;
