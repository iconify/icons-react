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
		"content": `<style>.joe8hccne {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.02 17.98V5.5H17.98v12.48m12.04 12.04H42.5V17.98H30.02M17.98 30.02V42.5h12.04V30.02M17.98 17.98H5.5v12.04h12.48");
}
</style><path class="joe8hccne"/>`,
		"fallback": "arcticons:cross",
	});
}

export default Component;
