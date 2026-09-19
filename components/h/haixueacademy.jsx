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
		"content": `<style>.iplx3sbcu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m14.25 36.666l14.625-25.331L43.5 36.665H24L14.25 19.78L4.5 36.666z");
}
</style><path class="iplx3sbcu"/>`,
		"fallback": "arcticons:haixueacademy",
	});
}

export default Component;
