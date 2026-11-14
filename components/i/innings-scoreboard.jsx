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
		"content": `<style>.bijrdjbfa {
  d: path("M6 10a2 3 0 1 0 4 0a2 3 0 1 0-4 0m8 0a2 3 0 1 0 4 0a2 3 0 1 0-4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ltd6g7buu {
  d: path("M6 3.5h12A3.5 3.5 0 0 1 21.5 7v6a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 13V7A3.5 3.5 0 0 1 6 3.5m1 13V21m10-4.5V21");
}
</style><g class="hntgybcog"><path class="ltd6g7buu"/><path class="bijrdjbfa"/></g>`,
		"fallback": "uix:innings-scoreboard",
	});
}

export default Component;
