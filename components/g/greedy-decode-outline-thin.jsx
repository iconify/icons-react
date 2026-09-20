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
		"content": `<style>.e6cqo_biq {
  d: path("m6 12 5 -5");
}

.gorvssbqo {
  d: path("M17.5 9.5 20 12l-2.5 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kliut9bht {
  d: path("m10 12 5 5");
}

.ytqok-bxz {
  d: path("M2 12h15.5");
}
</style><g class="hntgybcog"><path class="ytqok-bxz"/><path class="gorvssbqo"/><path class="e6cqo_biq"/><path class="kliut9bht"/></g>`,
		"fallback": "iconmind:greedy-decode-outline-thin",
	});
}

export default Component;
