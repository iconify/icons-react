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
		"content": `<style>.uz2vf8bxz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.24 32.74L24 44.5L44.5 24L24 3.5h0L12.24 15.26m18.594 3.813H3.5m27.334 9.854H3.5");
}
</style><path class="uz2vf8bxz"/>`,
		"fallback": "arcticons:bank-solution",
	});
}

export default Component;
