import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.n1rxr1buu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.917 32.598v.809a1.3 1.3 0 0 0 1.293 1.3h25.58a1.3 1.3 0 0 0 1.293-1.3v-.809m0-14.444v-1.517c0-.714-.578-1.293-1.292-1.293h-6.334l-2.001-2.051h-8.912l-2 2.051h-6.335c-.714 0-1.292.579-1.292 1.293v1.517");
}

.ysand9coq {
  cx: 24px;
  cy: 25.015px;
  r: 5.417px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.yx75u6bre {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.667 19.598v5.417a5.417 5.417 0 0 0 10.833 0v-5.417m-39 0a5.417 5.417 0 0 0 10.833 0M9.917 30.431v-5.416");
}
</style><path class="n1rxr1buu"/><circle class="ysand9coq"/><path class="yx75u6bre"/>`,
		"fallback": "arcticons:daily-you",
	});
}

export default Component;
