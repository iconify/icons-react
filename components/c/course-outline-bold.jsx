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
		"content": `<style>.ec-jcit8z {
  d: path("M5 10h14v4H5Z");
}

.o9o4t05de {
  d: path("M3 3h14v4H3Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ugs22v-bb {
  d: path("M7 17h14v4H7Z");
}
</style><g class="s0phu2bbs"><path class="o9o4t05de"/><path class="ec-jcit8z"/><path class="ugs22v-bb"/></g>`,
		"fallback": "iconmind:course-outline-bold",
	});
}

export default Component;
