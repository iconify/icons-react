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
		"content": `<style>.g-frixucj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M3.5 25.018h9.877l2.277-10.973l2.278 20.162l2.277-25.145l2.278 29.876l2.277-29.745l2.278 27.235l2.277-25.406l2.278 18.756l2.277-16.217l2.278 11.363H44.5");
}
</style><path class="g-frixucj"/>`,
		"fallback": "arcticons:audio-spectrum-analyzer",
	});
}

export default Component;
