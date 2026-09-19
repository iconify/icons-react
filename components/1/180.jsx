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
		"content": `<style>.q3o-lxbgs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4m-29 13.417l3.492-1.902m0 0v13.97");
}

.s2ffr4kmh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.376 24a3.49 3.49 0 0 0 3.493-3.492h0a3.49 3.49 0 0 0-3.493-3.493h-2.27a3.49 3.49 0 0 0-3.492 3.493h0A3.49 3.49 0 0 0 20.106 24m0 0h2.27");
}

.xis8kue_b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.245 26.357a4.627 4.627 0 1 0 9.255 0v-4.714a4.627 4.627 0 1 0-9.255 0zM20.106 24a3.49 3.49 0 0 0-3.492 3.492h0a3.49 3.49 0 0 0 3.492 3.493h2.27a3.49 3.49 0 0 0 3.493-3.493h0A3.49 3.49 0 0 0 22.376 24");
}
</style><path class="q3o-lxbgs"/><path class="xis8kue_b"/><path class="s2ffr4kmh"/>`,
		"fallback": "arcticons:180",
	});
}

export default Component;
