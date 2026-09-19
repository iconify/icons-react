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
		"content": `<style>.l4l7ocbqe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 30.005L24 17.995l18.5 12.01");
}

.w22dvxbqi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 17.996L24 30.006l18.5-12.01M24 42.015v-12.01m0-12.01V5.985");
}

.y7gylibrs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 42.015L5.5 30.005v-12.01L24 5.985l18.5 12.01v12.01z");
}
</style><path class="y7gylibrs"/><path class="l4l7ocbqe"/><path class="w22dvxbqi"/>`,
		"fallback": "arcticons:codepen",
	});
}

export default Component;
