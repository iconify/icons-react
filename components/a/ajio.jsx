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
		"content": `<style>.atdn061pj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.788 33.443L23.958 8.218l-12.83 25.344C2.51 19.99 13.41 8.217 23.959 8.217c14.314 0 20.291 16.616 12.83 25.225");
}

.jq4h06tun {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M45.5 23.946a21.497 21.497 0 1 1-.001-.173");
}

.xzk3ydh6i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.092 37.344q-9.965 5.836-18.353-.178l2.539-4.69l13.413.085Zm-4.932-9.796l-8.275-.017l4.073-8.041Z");
}
</style><path class="xzk3ydh6i"/><path class="atdn061pj"/><path class="jq4h06tun"/>`,
		"fallback": "arcticons:ajio",
	});
}

export default Component;
