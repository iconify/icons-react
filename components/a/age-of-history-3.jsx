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
		"content": `<style>.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.x5a2afb5y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.499 18h4.363m-4.363 12h4.363m-2.181-12v12m6.137-12h4.364m-4.364 12h4.364M24 18v12m6.138-12h4.363m-4.363 12h4.363m-2.182-12v12");
}
</style><rect class="j3s9ivbxi"/><path class="x5a2afb5y"/>`,
		"fallback": "arcticons:age-of-history-3",
	});
}

export default Component;
