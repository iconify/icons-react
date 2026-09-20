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
		"content": `<style>.tag83wbfe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 5.5c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4zm10.2 13.7h4.7M18.8 24h3.1m-2.2-4.8L18 28.8");
}

.tyqquxbmb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31 27.7c.5.7 1.3 1.2 2.2 1h1.4c1.4 0 2.5-1 2.8-2.4c.2-1-.4-2.1-1.5-2.3h-2.1c-1.1 0-2-.8-2-1.9v-.5c.3-1.4 1.4-2.3 2.8-2.4H36c.9-.1 1.7.3 2.2 1M9.3 28.7l4.8-9.5m1.4 9.6l-1.4-9.6m.9 6.4h-4.1m11.5 3.1l4.8-9.5m1.4 9.6l-1.4-9.6m.9 6.4H24");
}
</style><path class="tag83wbfe"/><path class="tyqquxbmb"/>`,
		"fallback": "arcticons:afas-pocket",
	});
}

export default Component;
