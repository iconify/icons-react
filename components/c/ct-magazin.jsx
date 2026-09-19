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
		"content": `<style>.g6x-qui2p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.384 21.83c.83-1.107 1.106-2.214 1.106-4.428V16.02m5.185-1.704v16.602c0 1.66 1.107 2.767 2.767 2.767h.83m-6.364-14.666h5.81M22.966 30.917c-.83 1.66-2.767 2.767-4.704 2.767h0c-3.044 0-5.534-2.49-5.534-5.533v-3.598c0-3.043 2.49-5.534 5.534-5.534h0c1.937 0 3.874 1.107 4.704 2.767");
}

.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}
</style><path class="i9clfwm2k"/><path class="g6x-qui2p"/>`,
		"fallback": "arcticons:ct-magazin",
	});
}

export default Component;
