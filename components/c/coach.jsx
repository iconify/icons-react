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
		"content": `<style>.b281jacjk {
  d: path("M9 4H6.5a2 2 0 0 0-2 2v13.5a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H15");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mtc3mjb7f {
  d: path("M14.25 13.25L16 11.5l1.75 1.75");
}

.q5jp4ccva {
  d: path("M10.75 2.5h2.5A1.75 1.75 0 0 1 15 4.25A1.75 1.75 0 0 1 13.25 6h-2.5A1.75 1.75 0 0 1 9 4.25a1.75 1.75 0 0 1 1.75-1.75m-3 14a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M14 18c1.5 0 2-2 2-6.5");
}
</style><g class="hntgybcog"><path class="b281jacjk"/><path class="q5jp4ccva"/><path class="mtc3mjb7f"/></g>`,
		"fallback": "uix:coach",
	});
}

export default Component;
