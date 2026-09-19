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
		"content": `<style>.h7e3ugbci {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.933 5.5h6.328a.95.95 0 0 1 .949.949v2.846h4.393a1.897 1.897 0 0 1 1.897 1.897v29.41a1.897 1.897 0 0 1-1.897 1.898H23.896a1.897 1.897 0 0 1-1.898-1.897v-29.41a1.897 1.897 0 0 1 1.898-1.898h4.089V6.45a.95.95 0 0 1 .948-.949m-6.935 30.358H42.5M27.985 9.295h8.225");
}

.z5689xb0x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 24h2.567l1.739-4.645l2.242 13.458l2.243-21.589l2.243 16.879L19.506 24h2.492");
}
</style><path class="h7e3ugbci"/><path class="z5689xb0x"/>`,
		"fallback": "arcticons:bamowi",
	});
}

export default Component;
