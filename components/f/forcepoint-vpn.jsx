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
		"content": `<style>.g-a3y9b2p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 21.944V42.5l12.333-10.278z");
}

.w_548nbrx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.556 5.5h32.889v8.222H15.777V42.5H7.556z");
}
</style><path class="w_548nbrx"/><path class="g-a3y9b2p"/>`,
		"fallback": "arcticons:forcepoint-vpn",
	});
}

export default Component;
