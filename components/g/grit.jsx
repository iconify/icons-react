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
		"content": `<style>.lynbc737v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m5.5 31.374l5.281 5.235l9.145-9.38m5.342 6.263H42.5m-37-17.955l5.281 5.234l9.145-9.38m5.342 6.264H42.5");
}
</style><path class="lynbc737v"/>`,
		"fallback": "arcticons:grit",
	});
}

export default Component;
