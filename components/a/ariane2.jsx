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
		"content": `<style>.bl4v1ybiu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.732 24.925a2 2 0 0 1 2-2h0m-2 0v5.3");
}

.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.ix2zevlfa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.537 22.925v5.3m17.5-1.009a2 2 0 0 1-1.737 1.009h0a2 2 0 0 1-2-2v-1.3a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v.65h-4m-7.92.65a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2v-1.3a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2m0 3.3v-5.3m5.98 5.3v-3.3a2 2 0 0 0-2-2h0a2 2 0 0 0-2 2v3.3m.001-3.3v-2M9.7 28.201l2.599-7.976m2.601 8l-2.601-8m1.731 5.324h-3.465");
}

.vs0g8db5u {
  cx: 20.537px;
  cy: 20.475px;
  r: 0.7px;
  fill: currentColor;
}
</style><path class="i9clfwm2k"/><path class="bl4v1ybiu"/><circle class="vs0g8db5u"/><path class="ix2zevlfa"/>`,
		"fallback": "arcticons:ariane2",
	});
}

export default Component;
