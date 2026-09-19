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
		"content": `<style>.ksrzkulwb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.5 5.5h10v10h-10zm0 27h10v10h-10z");
}

.laix5fbpb {
  cx: 10.5px;
  cy: 24px;
  r: 5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ybfhly8cb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.5 32.5L24 24l8.5-8.5M24 24h-8.5");
}
</style><path class="ksrzkulwb"/><circle class="laix5fbpb"/><path class="ybfhly8cb"/>`,
		"fallback": "arcticons:delta-hotspot",
	});
}

export default Component;
