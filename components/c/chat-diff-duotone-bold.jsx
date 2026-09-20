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
		"content": `<style>.ae31urzdd {
  d: path("M13 10h4");
}

.hbdbg_bcy {
  d: path("M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v11a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.lyjarcbwz {
  d: path("M7 18v3l3 -3");
}

.ok51kk6mj {
  d: path("M9 8v4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.sqmravmye {
  fill: currentColor;
  d: path("M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v11a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.yqfc2tb5a {
  d: path("M7 10h4");
}
</style><g class="s0phu2bbs"><path class="sqmravmye"/><path class="hbdbg_bcy"/><path class="lyjarcbwz"/><path class="ok51kk6mj"/><path class="yqfc2tb5a"/><path class="ae31urzdd"/></g>`,
		"fallback": "iconmind:chat-diff-duotone-bold",
	});
}

export default Component;
