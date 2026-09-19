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
		"content": `<style>.mby2545bc {
  width: 10.028px;
  height: 15.136px;
  x: 33.472px;
  y: 16.678px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 5.014px;
  ry: 5.014px;
}

.o5wgep34q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 34.746h39v2.5h-39zm2-10.5h4.919");
}

.r07jgqi3n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 14.746c-5.771-9.997-39 1.932-39 1.932m2-.679v15.814m-2 .001h4m11.716-15.136v15.136m-2 0h9.568v-2m-9.568-13.136h4");
}
</style><path class="o5wgep34q"/><rect class="mby2545bc"/><path class="r07jgqi3n"/>`,
		"fallback": "arcticons:flo-prestige-paris",
	});
}

export default Component;
