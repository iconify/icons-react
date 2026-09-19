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
		"content": `<style>.l_ktaib9e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 44.289c6.18-6.18 8.512-11.759 0-20.27S17.819 9.93 24 3.749");
}

.ojwogphoe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m16.833 24.019l.01 20.274a21.5 21.5 0 0 1 .12-40.59m14.204 20.316V3.749a21.5 21.5 0 0 1-.022 40.548");
}
</style><path class="ojwogphoe"/><path class="l_ktaib9e"/>`,
		"fallback": "arcticons:gruppo-san-donato",
	});
}

export default Component;
