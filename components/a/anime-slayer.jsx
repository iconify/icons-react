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
		"content": `<style>.e0a7q4b_v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.65 43.5c-3.8-6.47-10.11-28.766-10.981-36.026");
}

.gnadfqc-z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.027 30.936c8.411-.151 23.94-3.63 31.946-7.592");
}

.z4kab2bxk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.489 41.541C12.07 33.858 20.805 13.639 26.386 4.5");
}
</style><path class="z4kab2bxk"/><path class="e0a7q4b_v"/><path class="gnadfqc-z"/>`,
		"fallback": "arcticons:anime-slayer",
	});
}

export default Component;
