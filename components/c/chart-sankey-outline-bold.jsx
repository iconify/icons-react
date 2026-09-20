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
		"content": `<style>.d6785mbmg {
  d: path("M4 18h6l4 -4h6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.s4m8c10_q {
  d: path("M4 6h6l4 4h6");
}
</style><g class="s0phu2bbs"><path class="s4m8c10_q"/><path class="d6785mbmg"/></g>`,
		"fallback": "iconmind:chart-sankey-outline-bold",
	});
}

export default Component;
