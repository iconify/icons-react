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
		"content": `<style>.azs8m69dm {
  d: path("m14 5 -2.5 2.5H14L11.5 10");
}

.bnumaib7z {
  d: path("M9 13h6v6H9Z");
}

.d5czi6rdr {
  d: path("M3 4a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="d5czi6rdr"/><path class="azs8m69dm"/><path class="bnumaib7z"/></g>`,
		"fallback": "iconmind:event-stopped-outline-bold",
	});
}

export default Component;
