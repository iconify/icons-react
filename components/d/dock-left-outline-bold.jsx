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
		"content": `<style>.iagc2mb6o {
  d: path("M16 9.5 13.5 12l2.5 2.5");
}

.nzpsuduik {
  d: path("M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t80c6b0ls {
  d: path("M9 3v18");
}
</style><g class="s0phu2bbs"><path class="nzpsuduik"/><path class="t80c6b0ls"/><path class="iagc2mb6o"/></g>`,
		"fallback": "iconmind:dock-left-outline-bold",
	});
}

export default Component;
