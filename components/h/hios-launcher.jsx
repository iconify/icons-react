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
		"content": `<style>.nqyqhkbhq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4m-29 13.6v10.4m6.9-10.4v10.4m-6.9-5.2h4.1");
}

.q9hzbolec {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.3 22.6v6.9m12.5-1.2c.6.8 1.4 1.1 2.5 1.1h1.5c1.4 0 2.6-1.2 2.6-2.6h0c0-1.4-1.2-2.6-2.6-2.6h-1.7c-1.4 0-2.6-1.2-2.6-2.6h0c0-1.4 1.2-2.6 2.6-2.6h1.5c1.1 0 1.9.3 2.5 1.1m-12.4-1c1.9 0 3.4 1.5 3.4 3.4V26c0 1.9-1.5 3.4-3.4 3.4h0c-1.9 0-3.4-1.5-3.4-3.4v-3.5c0-1.9 1.5-3.4 3.4-3.4");
}

.wj7xi2bcw {
  cx: 19.3px;
  cy: 19.4px;
  r: 0.8px;
  fill: currentColor;
}
</style><path class="nqyqhkbhq"/><circle class="wj7xi2bcw"/><path class="q9hzbolec"/>`,
		"fallback": "arcticons:hios-launcher",
	});
}

export default Component;
