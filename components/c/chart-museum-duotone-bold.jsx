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
		"content": `<style>.aho6qjb9y {
  d: path("M8 10v9");
}

.djf_d8rwt {
  d: path("m8 8.5 4 -4 4 4");
}

.do7jur_bk {
  fill: currentColor;
  d: path("M2 12a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.s229edbfl {
  d: path("M15 10v9");
}

.z-ephs7jm {
  d: path("M2 12a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}
</style><g class="s0phu2bbs"><path class="do7jur_bk"/><path class="z-ephs7jm"/><path class="aho6qjb9y"/><path class="s229edbfl"/><path class="djf_d8rwt"/></g>`,
		"fallback": "iconmind:chart-museum-duotone-bold",
	});
}

export default Component;
