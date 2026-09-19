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
		"content": `<style>.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.p283eozyh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.785 32.201L17.142 15.8h0L10.5 32.2");
}

.r2_kbmuff {
  cx: 17.143px;
  cy: 29.943px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.126px;
  ry: 2.258px;
}

.rjmsyd2ov {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.715 32.201L26.503 15.8H37.5M26.61 24h7.257");
}
</style><path class="i9clfwm2k"/><path class="p283eozyh"/><ellipse class="r2_kbmuff"/><path class="rjmsyd2ov"/>`,
		"fallback": "arcticons:all-football",
	});
}

export default Component;
