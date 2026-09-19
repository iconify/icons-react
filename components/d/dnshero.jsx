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
		"content": `<style>.uwrxavbst {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.3 16.15L4.5 35.85l35.6 3.9l-17.6-7.4L43.5 11L7.3 8.25Z");
}
</style><path class="uwrxavbst"/>`,
		"fallback": "arcticons:dnshero",
	});
}

export default Component;
