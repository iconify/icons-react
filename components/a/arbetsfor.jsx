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
		"content": `<style>.unug2mbnm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.71 3.71C40.77 4.35 50.61 28 40.6 44.26M17.4 16.51A13.88 13.88 0 1 1 7.59 40.2a13.89 13.89 0 0 1 9.81-23.69");
}
</style><path class="unug2mbnm"/>`,
		"fallback": "arcticons:arbetsfor",
	});
}

export default Component;
