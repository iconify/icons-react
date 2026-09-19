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
		"content": `<style>.bn-n-gbxz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4m-3.141 5.948l-7.379 9.777m7.379 0l-7.379-9.777");
}

.p41c-eeyf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.143 33.444c-.933 1.865-3.109 3.108-5.285 3.108h0c-3.419 0-6.217-2.797-6.217-6.217v-4.04c0-3.42 2.798-6.218 6.217-6.218h0c3.42 0 6.217 2.798 6.217 6.217v2.176H12.642");
}
</style><path class="bn-n-gbxz"/><path class="p41c-eeyf"/>`,
		"fallback": "arcticons:exponential-idle",
	});
}

export default Component;
