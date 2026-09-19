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
		"content": `<style>.aetwilb1q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.823 21.704a4.666 4.666 0 0 0-4.912-4.665c-2.521.132-4.411 2.4-4.411 4.929v4.329a4.666 4.666 0 0 0 4.661 4.67h0a4.666 4.666 0 0 0 4.662-4.67H16.16m13.372-9.265H36.5M29.532 24h4.529m-4.529-6.968v13.936");
}

.idmbetbsk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 42.5h-29c-2.2 0-4-1.8-4-4v-29c0-2.2 1.8-4 4-4h29c2.2 0 4 1.8 4 4v29c0 2.2-1.8 4-4 4M25.207 17.032v13.936");
}
</style><path class="idmbetbsk"/><path class="aetwilb1q"/>`,
		"fallback": "arcticons:gifmaker",
	});
}

export default Component;
