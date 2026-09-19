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
		"content": `<style>.dds14882y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m5.5 18.307l.296 23.216H29.99v-21.69zm24.489-3.479L42.5 6.478z");
}

.lhqrgtxdk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m5.796 13.999l24.193.829v5.004l12.511-9.18v20.862L29.989 41.523");
}

.wjv0fobmr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.32 23.341h15.665v3.998H9.32zM5.5 17.567l.296-3.568L16.65 6.477H42.5v4.176");
}
</style><path class="dds14882y"/><path class="lhqrgtxdk"/><path class="wjv0fobmr"/>`,
		"fallback": "arcticons:comic-geeks",
	});
}

export default Component;
