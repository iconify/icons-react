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
		"content": `<style>.iuszg328t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m21.898 9.452l15.599 15.599L24 38.548L10.503 25.051l7.034-7.033");
}

.wxnbxy_tm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m21.898 3l22.051 22.051L24 45L4.051 25.051l7.034-7.033");
}

.x45u9bcqe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 18.011l7.041 7.04L24 32.092l-7.041-7.041z");
}
</style><path class="x45u9bcqe"/><path class="iuszg328t"/><path class="wxnbxy_tm"/>`,
		"fallback": "arcticons:access-more",
	});
}

export default Component;
