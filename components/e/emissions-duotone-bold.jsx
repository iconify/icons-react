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
		"content": `<style>.bt018bgfu {
  fill: currentColor;
  d: path("M6 21V11h6v10Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.bx6cs-b9q {
  d: path("M16 3.5a2.5 2.5 0 0 1 0 5");
}

.nt1osdoki {
  d: path("M14 21h7");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.spiam7zpy {
  d: path("M16 13.5a2.5 2.5 0 0 1 0 -5");
}

.wfp94ccxr {
  d: path("M6 21V11h6v10Z");
}
</style><g class="s0phu2bbs"><path class="bt018bgfu"/><path class="wfp94ccxr"/><path class="spiam7zpy"/><path class="bx6cs-b9q"/><path class="nt1osdoki"/></g>`,
		"fallback": "iconmind:emissions-duotone-bold",
	});
}

export default Component;
