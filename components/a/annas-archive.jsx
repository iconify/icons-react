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
		"content": `<style>.mbsy3tbth {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.753 5.565L42.5 42.398l-11.303.037l-1.915-7.252H18.718l-1.915 7.252L5.5 42.398L17.247 5.565z");
}

.pbzmbh85w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.376 27.27L24 14.588L20.624 27.27z");
}
</style><path class="mbsy3tbth"/><path class="pbzmbh85w"/>`,
		"fallback": "arcticons:annas-archive",
	});
}

export default Component;
