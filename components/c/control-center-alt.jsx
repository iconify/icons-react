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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.f-5wm485e {
  cx: 24px;
  cy: 24px;
  r: 4px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.fm_51-bsa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m39.5 24l-5.47 3.647v-7.294zm-31 0l5.47 3.647v-7.294z");
}

.m5dnw-zdu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 8.5l3.647 5.47h-7.294zm0 31l3.647-5.47h-7.294z");
}
</style><circle class="cpk0fnbgt"/><path class="m5dnw-zdu"/><circle class="f-5wm485e"/><path class="fm_51-bsa"/>`,
		"fallback": "arcticons:control-center-alt",
	});
}

export default Component;
