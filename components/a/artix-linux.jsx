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
		"content": `<style>.a9x0-pbwm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m23.5 5.5l-6.5 13l18 10zm19 37l-5.5-10l-10 5zm-37 0L15 23l18 7.5z");
}
</style><path class="a9x0-pbwm"/>`,
		"fallback": "arcticons:artix-linux",
	});
}

export default Component;
