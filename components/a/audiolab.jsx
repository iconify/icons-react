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
		"content": `<style>.c1to_ub9c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.312 35.566L26.316 4.5l11.505.002v7.636H26.316");
}

.vy0ph9y0g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.313 35.45a8.07 8.07 0 1 0 0 .116");
}
</style><path class="vy0ph9y0g"/><path class="c1to_ub9c"/>`,
		"fallback": "arcticons:audiolab",
	});
}

export default Component;
