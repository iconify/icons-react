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
		"content": `<style>.eokpm4bio {
  cx: 10.5px;
  cy: 37.5px;
  r: 5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ras6scpfa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.5 42.5a5 5 0 0 0 5-5v-27a5 5 0 0 0-5-5h0a5 5 0 0 0-5 5v27a5 5 0 0 0 5 5m-13.5 0a5 5 0 0 0 5-5v-16a5 5 0 0 0-5-5h0a5 5 0 0 0-5 5v16a5 5 0 0 0 5 5");
}
</style><path class="ras6scpfa"/><circle class="eokpm4bio"/>`,
		"fallback": "arcticons:google-analytics",
	});
}

export default Component;
