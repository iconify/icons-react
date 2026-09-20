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
		"content": `<style>.fbw2ldgtv {
  d: path("M12 10v7");
}

.ic_pehd5a {
  d: path("M3 17h18");
}

.mvo4nxq3c {
  d: path("M16 13a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
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

.xsyfe-byx {
  d: path("M6 13a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="s0phu2bbs"><path class="srzgk7jml"/><path class="ic_pehd5a"/><path class="fbw2ldgtv"/><path class="xsyfe-byx"/><path class="mvo4nxq3c"/></g>`,
		"fallback": "iconmind:car-dashboard-outline-bold",
	});
}

export default Component;
