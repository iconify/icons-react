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
		"content": `<style>.ckogh6bmd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.236 42.5H8.764M24 33.924V5.5M12.287 22.211L24 33.924l11.713-11.713");
}
</style><path class="ckogh6bmd"/>`,
		"fallback": "arcticons:downloads",
	});
}

export default Component;
