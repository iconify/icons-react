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
		"content": `<style>.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.ys54arb2n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.248 19.5h5.962m-2.981 9v-9m4.977 8.014c.552.718 1.244.986 2.207.986h1.332a2.245 2.245 0 0 0 2.246-2.245v-.01A2.245 2.245 0 0 0 35.745 24h-1.47a2.25 2.25 0 0 1-2.247-2.248A2.25 2.25 0 0 1 34.28 19.5h1.326c.962 0 1.654.268 2.206.986M10.009 24h2.925m-2.925 4.5v-9h4.5m7.957 2.981a2.981 2.981 0 0 0-5.962 0v3.038a2.981 2.981 0 0 0 5.962 0h-2.981");
}
</style><path class="ys54arb2n"/><path class="i9clfwm2k"/>`,
		"fallback": "arcticons:fgts",
	});
}

export default Component;
