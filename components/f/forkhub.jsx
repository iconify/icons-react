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
		"content": `<style>.j7ymcybsg {
  cx: 16.1px;
  cy: 9.08px;
  r: 4.58px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.jf-j82b1i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.1 34.34V13.66m0 19.01c0-5.4 5-8.67 11.22-8.67");
}

.jtdoh9bdf {
  cx: 16.1px;
  cy: 38.92px;
  r: 4.58px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.lyuiivbah {
  cx: 31.9px;
  cy: 24px;
  r: 4.58px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="jtdoh9bdf"/><circle class="j7ymcybsg"/><circle class="lyuiivbah"/><path class="jf-j82b1i"/>`,
		"fallback": "arcticons:forkhub",
	});
}

export default Component;
