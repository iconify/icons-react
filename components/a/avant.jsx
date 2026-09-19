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
		"content": `<style>.mfcxjca9j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m41.898 39.499l-5.966-10.333L29.966 39.5H6.102L24 8.5l5.966 10.333l-7.954 13.778");
}
</style><path class="mfcxjca9j"/>`,
		"fallback": "arcticons:avant",
	});
}

export default Component;
