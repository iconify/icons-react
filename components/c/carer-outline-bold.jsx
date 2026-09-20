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
		"content": `<style>.aj1uncbqw {
  d: path("M4 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.c7k5qsbpo {
  d: path("M2 21v-3a5 5 0 0 1 10 0");
}

.fn7sp80dx {
  d: path("M12 21v-4a4 4 0 0 1 8 0v4");
}

.pj7ux4r4p {
  d: path("M15 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="aj1uncbqw"/><path class="pj7ux4r4p"/><path class="c7k5qsbpo"/><path class="fn7sp80dx"/></g>`,
		"fallback": "iconmind:carer-outline-bold",
	});
}

export default Component;
