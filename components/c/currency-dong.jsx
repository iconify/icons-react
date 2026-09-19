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

.gl42j5bqu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.5 23.9a4 4 0 1 0-8 0v2.6a4 4 0 1 0 8 0m0 4v-16m-9 19h10m-3-17h4");
}
</style><circle class="cpk0fnbgt"/><path class="gl42j5bqu"/>`,
		"fallback": "arcticons:currency-dong",
	});
}

export default Component;
