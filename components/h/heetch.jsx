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
		"content": `<style>.km9y9ibzy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.34 34.725a3.887 3.887 0 0 1 0 7.775a3.887 3.887 0 0 1 0-7.775M8.775 23.982h27.317V5.5M8.775 42.147V5.5");
}
</style><path class="km9y9ibzy"/>`,
		"fallback": "arcticons:heetch",
	});
}

export default Component;
