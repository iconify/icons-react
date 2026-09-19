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
		"content": `<style>.j6m3b9-1j {
  cx: 29.129px;
  cy: 5.118px;
  r: 0.75px;
  fill: currentColor;
}

.s66g6n25r {
  fill: currentColor;
  d: path("M38.85 11.924a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0");
}

.ujeeb4bnk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.57 30.643a7.792 7.792 0 1 1 15.584 0v5.065a7.792 7.792 0 1 1-15.584 0m0 7.792V12.331m9.328 7.287c-1.283-8.122 2.565-12.396 8.549-14.106m-5.343 14.106c2.35-8.122 9.312-9.129 14.32-8.122");
}
</style><path class="ujeeb4bnk"/><circle class="j6m3b9-1j"/><path class="s66g6n25r"/>`,
		"fallback": "arcticons:beez",
	});
}

export default Component;
