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
		"content": `<style>.ortw0s1jo {
  d: path("M5 14a7 7 0 1 0 14 0 7 7 0 1 0 -14 0");
}

.rt75x1b6c {
  d: path("M12 7V4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.z55i2tbmp {
  d: path("m9 4 3 3 3 -3");
}
</style><g class="s0phu2bbs"><path class="ortw0s1jo"/><path class="z55i2tbmp"/><path class="rt75x1b6c"/></g>`,
		"fallback": "iconmind:focus-session-outline-bold",
	});
}

export default Component;
