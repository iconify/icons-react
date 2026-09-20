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
		"content": `<style>.qydoy8byr {
  d: path("m19 10 -5 5");
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

.weeetziwb {
  d: path("m14 10 5 5");
}
</style><g class="s0phu2bbs"><path class="v-jogvb5z"/><path class="weeetziwb"/><path class="qydoy8byr"/></g>`,
		"fallback": "iconmind:event-failed-outline-bold",
	});
}

export default Component;
