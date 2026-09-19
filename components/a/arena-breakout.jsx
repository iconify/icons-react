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

.ov52dzt2s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.763 27.252v-6.504h2.129c1.204 0 2.18.978 2.18 2.184s-.976 2.185-2.18 2.185l2.129 2.133m7.4.002v-6.504l4.877 6.504v-6.504M21.6 24h3.463m.602 3.252H21.6v-6.504h4.065m-11.474 6.504l-2.846-6.504L8.5 27.252h3.658m27.342 0l-2.845-6.504l-2.846 6.504h3.659");
}
</style><path class="i9clfwm2k"/><path class="ov52dzt2s"/>`,
		"fallback": "arcticons:arena-breakout",
	});
}

export default Component;
