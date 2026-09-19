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
		"content": `<style>.i_8k4qwhd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.5 21.3v-3.24a3.24 3.24 0 0 0-3.24-3.24h-4.32a3.24 3.24 0 0 0-3.24 3.24v11.88a3.24 3.24 0 0 0 3.24 3.24h4.32a3.24 3.24 0 0 0 3.24-3.24v-4.32m-27 1.08v3.24a3.24 3.24 0 0 0 3.24 3.24h5.4a3.24 3.24 0 0 0 3.24-3.24V26.7a3.24 3.24 0 0 0-3.24-3.24m-8.64-5.4v-3.24h8.64a3.24 3.24 0 0 1 3.24 3.24v2.16a3.24 3.24 0 0 1-3.24 3.24H15.9");
}

.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}
</style><path class="i9clfwm2k"/><path class="i_8k4qwhd"/>`,
		"fallback": "arcticons:business-kalender",
	});
}

export default Component;
