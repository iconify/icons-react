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
		"content": `<style>.d8pel1bks {
  d: path("M7 3h6.5L17 6.5V17H7Zm5 11V8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ju3_uldgo {
  d: path("M9.75 10.25L12 8l2.25 2.25");
}

.w14p-rbys {
  d: path("M3 13v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6");
}
</style><g class="hntgybcog"><path class="w14p-rbys"/><path class="d8pel1bks"/><path class="ju3_uldgo"/></g>`,
		"fallback": "uix:assignment-submission",
	});
}

export default Component;
