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
		"content": `<style>.o_0z8p78q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.167 32.5L22 42.5l.425-8h-3.591L26 24.5l-.425 8z");
}

.xxya5lbpq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 37.555L27.578 7.711a4 4 0 0 0-7.156 0L5.5 37.555h6.473L24 13.5l12.027 24.055z");
}
</style><path class="xxya5lbpq"/><path class="o_0z8p78q"/>`,
		"fallback": "arcticons:anker-app",
	});
}

export default Component;
