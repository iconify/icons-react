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
		"content": `<style>.g2wj9jbhp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4");
}

.k6a9gsbxl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.5 24a5.5 5.5 0 1 0-5.5 5.5m9.5-5.5v9.5H24");
}

.m3w_f5bvp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.5 24a9.5 9.5 0 1 0-9.5 9.5");
}

.yv8vt14jg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.5 24v5.5H24");
}
</style><path class="g2wj9jbhp"/><path class="m3w_f5bvp"/><path class="k6a9gsbxl"/><path class="yv8vt14jg"/>`,
		"fallback": "arcticons:captions",
	});
}

export default Component;
