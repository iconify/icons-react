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
		"content": `<style>.q6adcwv0x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.617 24.197a10.05 10.05 0 0 1 6.126 9.254c0 5.55-4.499 10.049-10.048 10.049H13.649V22.3");
}

.yp_0trcjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.119 36.695L35.933 20.88A9.596 9.596 0 0 0 29.148 4.5H18.852a9.596 9.596 0 0 0 0 19.19h3.871z");
}
</style><path class="q6adcwv0x"/><path class="yp_0trcjh"/>`,
		"fallback": "arcticons:beeper",
	});
}

export default Component;
