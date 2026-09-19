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
		"content": `<style>.bk3fbk7rx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.289 15.396L24.145 24L8.71 15.396M24.145 24L24 41.207");
}

.krpmkmbio {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.467 31.46V16.541a3.1 3.1 0 0 0-.091-.955a1.3 1.3 0 0 0-.202-.346a3.1 3.1 0 0 0-.789-.547L25.05 7.192a3.1 3.1 0 0 0-.875-.393a1.3 1.3 0 0 0-.349 0a3.1 3.1 0 0 0-.875.393l-13.336 7.5a3.1 3.1 0 0 0-.788.548a1.3 1.3 0 0 0-.203.346a3.1 3.1 0 0 0-.09.955V31.46a3.1 3.1 0 0 0 .09.955a1.3 1.3 0 0 0 .203.346a3.1 3.1 0 0 0 .788.547L22.95 40.81a3.1 3.1 0 0 0 .876.393a1.3 1.3 0 0 0 .348 0a3.1 3.1 0 0 0 .875-.393l13.336-7.5a3.1 3.1 0 0 0 .789-.548a1.3 1.3 0 0 0 .202-.346a3.1 3.1 0 0 0 .091-.955");
}
</style><path class="krpmkmbio"/><path class="bk3fbk7rx"/>`,
		"fallback": "arcticons:graphene-apps",
	});
}

export default Component;
