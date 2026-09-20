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
		"content": `<style>.q-5l-qhcw {
  d: path("M12 21c-4 0 -6 -3 -6 -7C6 9 9 4 12 4s6 5 6 10c0 4 -2 7 -6 7");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.v29fxrpgx {
  d: path("m8 13 2 2 2 -2 2 2 2 -2");
}
</style><g class="s0phu2bbs"><path class="q-5l-qhcw"/><path class="v29fxrpgx"/></g>`,
		"fallback": "iconmind:egg-outline-bold",
	});
}

export default Component;
