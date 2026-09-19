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
		"content": `<style>.ecx756pck {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.175 21.11a3.84 3.84 0 0 0-4.044-3.84c-2.075.108-3.631 1.975-3.631 4.057v3.564a3.84 3.84 0 0 0 3.838 3.845h0a3.84 3.84 0 0 0 3.837-3.845h-3.837m6.432-.887a2.87 2.87 0 0 1 2.868-2.868h0m-2.868 2.868v4.732m10.313-2.868a2.87 2.87 0 0 1-2.868 2.868h0a2.87 2.87 0 0 1-2.868-2.868v-1.864a2.87 2.87 0 0 1 2.868-2.868h0a2.87 2.87 0 0 1 2.868 2.868m0 4.732v-7.6m2.681 2.868a2.87 2.87 0 0 1 2.868-2.868h0a2.87 2.87 0 0 1 2.868 2.868v1.864a2.87 2.87 0 0 1-2.868 2.868h0a2.87 2.87 0 0 1-2.868-2.868m0 2.868V17.264");
}

.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}
</style><path class="i9clfwm2k"/><path class="ecx756pck"/>`,
		"fallback": "arcticons:grab",
	});
}

export default Component;
