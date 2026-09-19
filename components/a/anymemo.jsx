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
		"content": `<style>.oto5mz67w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m30.8 36.4l2.6 4.5h10.1l-8.4-14.6h-8.4l-1.6 2.5h-2.2l-1.6-2.5h-8.4L4.5 40.9h10.1l2.6-4.5l2.5 4.5h8.6z");
}

.qv2xtygpq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.1 26.3L24 7.1L12.9 26.3");
}

.tfv0blbio {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.3 26.3v-3.5l1.6-2.4h2.2l1.6 2.4v3.5");
}
</style><path class="qv2xtygpq"/><path class="tfv0blbio"/><path class="oto5mz67w"/>`,
		"fallback": "arcticons:anymemo",
	});
}

export default Component;
