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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.n55a5oans {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M10 14v-4c.001-1.031 1.175-1.549 2-1l3 2a1.202 1.202 0 0 1 0 2l-3 2c-.825.549-1.999.031-2-1");
}

.q8aa_2bvj {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10.592 3.11a9 9 0 1 1-7.481 7.482M4.719 6.71a9 9 0 0 1 1.99-1.991M10 10v4c0 .997 1.145 1.57 2 1l3-2a1.202 1.202 0 0 0 0-2l-3-2c-.855-.57-2 .003-2 1");
}
</style><g class="ft5dv1b6b"><path class="n55a5oans"/><path class="q8aa_2bvj"/></g>`,
		"fallback": "coolicons:circle-dashed-play-three-quarter-duotone-round",
	});
}

export default Component;
