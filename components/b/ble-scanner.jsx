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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.cvn_kvb7c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m16.033 16.63l15.934 14.815l-7.986 7.202V9.353l7.986 7.191l-15.934 14.962");
}
</style><circle class="cpk0fnbgt"/><path class="cvn_kvb7c"/>`,
		"fallback": "arcticons:ble-scanner",
	});
}

export default Component;
