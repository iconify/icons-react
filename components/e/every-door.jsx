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
		"content": `<style>.farpa8r3m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.838 28.415h18.289v12.748H14.838zm.012-19.183c2.894-1.368 5.909-1.954 9.133-1.954c3.348 0 6.15.533 9.13 2.004m.005.004V22.01H14.84V9.265h.03");
}

.iw-2clbqh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.117 4.5h23.767v39H12.117z");
}

.pubmlcu_f {
  cx: 32.914px;
  cy: 25.281px;
  r: 1.24px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="iw-2clbqh"/><path class="farpa8r3m"/><circle class="pubmlcu_f"/>`,
		"fallback": "arcticons:every-door",
	});
}

export default Component;
