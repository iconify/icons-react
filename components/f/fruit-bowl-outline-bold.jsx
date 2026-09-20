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
		"content": `<style>.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.sjgt480pd {
  d: path("M6 9a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.vse8wy5nd {
  d: path("M15 12c0 -4 2.5 -7 5 -7 0 4 -2.5 7 -5 7");
}

.xi253xtcz {
  d: path("M4 12h16c0 5 -4 9 -8 9s-8 -4 -8 -9");
}
</style><g class="s0phu2bbs"><path class="xi253xtcz"/><path class="sjgt480pd"/><path class="vse8wy5nd"/></g>`,
		"fallback": "iconmind:fruit-bowl-outline-bold",
	});
}

export default Component;
