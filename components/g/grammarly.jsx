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
		"content": `<style>.lzphm4byp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m44.759 39.447l-1.299-6.295l-6.294 1.299");
}

.tdh9yg50t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.46 33.152a21.5 21.5 0 1 1 .004-18.297");
}
</style><path class="tdh9yg50t"/><path class="lzphm4byp"/>`,
		"fallback": "arcticons:grammarly",
	});
}

export default Component;
