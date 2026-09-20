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
		"content": `<style>.eo60n2g2k {
  d: path("m6.5 6.5 10 10");
}

.jkuojibnm {
  d: path("M3 20h18");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.srzgk7jml {
  d: path("M3 17a9 9 0 0 1 18 0");
}
</style><g class="s0phu2bbs"><path class="srzgk7jml"/><path class="jkuojibnm"/><path class="eo60n2g2k"/></g>`,
		"fallback": "iconmind:bell-off-outline-bold",
	});
}

export default Component;
