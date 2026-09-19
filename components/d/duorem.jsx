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
		"content": `<style>.ecvongb1x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.39 22L23.92 4.5l17.62 17.62Zm.01 3.88h35.2L24 43.5Z");
}
</style><path class="ecvongb1x"/>`,
		"fallback": "arcticons:duorem",
	});
}

export default Component;
