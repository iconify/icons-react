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

.xqmk-h-_p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.871 35.629H36.5m-11.629-20.06l5.815-3.198m0 0v23.258M11.5 24h11.629m-5.815-5.814v11.628");
}
</style><path class="xqmk-h-_p"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:bettercounter",
	});
}

export default Component;
