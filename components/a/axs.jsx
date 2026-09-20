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
		"content": `<style>.m_5i0zt7n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4M24.189 24l-3.308 4.383m6.617-8.766l-1.758 2.328m3.957 9.353l-8.816-11.681");
}

.ndqcw921n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.814 27.644c.604.507 1.256.74 2.72.74h.743a2.19 2.19 0 0 0 2.187-2.192A2.19 2.19 0 0 0 35.277 24h-1.485a2.19 2.19 0 0 1-2.187-2.192c0-1.21.98-2.191 2.187-2.191h.743c1.464 0 2.116.232 2.72.74m-20.102 4.718a3.308 3.308 0 0 1-6.616 0v-2.15a3.308 3.308 0 0 1 6.616 0m0 5.458v-8.766");
}
</style><path class="m_5i0zt7n"/><path class="ndqcw921n"/>`,
		"fallback": "arcticons:axs",
	});
}

export default Component;
