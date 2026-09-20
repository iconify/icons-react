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
		"content": `<style>.bih55pzif {
  d: path("M11 3a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.klx4022eb {
  d: path("M21 21v-7h-6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.xioi8tbab {
  d: path("M3 21V11h6");
}

.z5hkg0_kc {
  d: path("M9 21V6h6v15Z");
}
</style><g class="s0phu2bbs"><path class="z5hkg0_kc"/><path class="xioi8tbab"/><path class="klx4022eb"/><path class="bih55pzif"/></g>`,
		"fallback": "iconmind:game-leaderboard-outline-bold",
	});
}

export default Component;
