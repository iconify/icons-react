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
		"content": `<style>.l9-vpjbes {
  d: path("m13 14 2.5 2.5L20 12");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.v-jogvb5z {
  d: path("m10 6 -5 5h4l-5 5");
}
</style><g class="s0phu2bbs"><path class="v-jogvb5z"/><path class="l9-vpjbes"/></g>`,
		"fallback": "iconmind:event-check-outline-bold",
	});
}

export default Component;
