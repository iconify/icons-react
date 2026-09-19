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

.x2mo31nhq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.034 24h8.79a5.25 5.25 0 0 1 5.242 5.25h0a5.25 5.25 0 0 1-5.243 5.25h-8.789V15.717h.031l-2.13-2.217h10.888a5.25 5.25 0 0 1 5.242 5.25h0A5.25 5.25 0 0 1 26.824 24z");
}
</style><path class="x2mo31nhq"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:bitdefender-central",
	});
}

export default Component;
