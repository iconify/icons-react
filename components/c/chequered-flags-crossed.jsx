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
		"content": `<style>.b_msbgbdh {
  fill: currentColor;
  d: path("m2.5 5.25l2.75-.75L6 7l-2.5.75ZM6 7l2.75-1l1 2.75L7 9.5Zm15.5-1.75l-2.75-.75L18 7l2.5.75ZM18 7l-2.75-1l-1 2.75L17 9.5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kfqd_0hog {
  d: path("m14 21.5l-6-18m2 18l6-18M8.468 4.904l.801 2.403a1.5 1.5 0 0 1-.968 1.904l-2.641.84a1.5 1.5 0 0 1-1.878-.955l-.801-2.403a1.5 1.5 0 0 1 .968-1.904l2.641-.84a1.5 1.5 0 0 1 1.878.955m7.064 0l-.801 2.403a1.5 1.5 0 0 0 .968 1.904l2.641.84a1.5 1.5 0 0 0 1.878-.955l.801-2.403a1.5 1.5 0 0 0-.968-1.904l-2.641-.84a1.5 1.5 0 0 0-1.878.955");
}
</style><g class="hntgybcog"><path class="kfqd_0hog"/><path class="b_msbgbdh"/></g>`,
		"fallback": "uix:chequered-flags-crossed",
	});
}

export default Component;
