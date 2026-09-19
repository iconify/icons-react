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
		"content": `<style>.g2hh5jccm {
  width: 33.231px;
  height: 25.727px;
  x: 7.384px;
  y: 17.773px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4.316px;
}

.snhuimo5s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.352 17.773V15.16a10.66 10.66 0 0 1 21.32 0v2.613M24 34.636v-8");
}
</style><rect class="g2hh5jccm"/><path class="snhuimo5s"/>`,
		"fallback": "arcticons:consorsbank-secureplus",
	});
}

export default Component;
