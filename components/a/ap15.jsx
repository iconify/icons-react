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
		"content": `<style>.ffy9wj9eh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.7 15.6c.5.4.9.6 2 .6h.2c1 0 1.9-.8 1.9-1.9c0-1-.8-1.9-1.9-1.9h-2.2V9.5h4.1");
}

.ipkyw0bcm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m27.8 10.4l1.7-.9v6.6m-5.8 14.1c0 1.9 1.7 3.5 3.7 3.5c2.1 0 3.7-1.6 3.7-3.5v-2.3c0-1.9-1.7-3.5-3.7-3.5c-2.1 0-3.7 1.6-3.7 3.5m0-3.5v14.1M19.8 29h-6.3m-1.6 4.7l4.7-14.1l4.7 14.1");
}

.ll0g54h-q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4");
}
</style><path class="ipkyw0bcm"/><path class="ll0g54h-q"/><path class="ffy9wj9eh"/>`,
		"fallback": "arcticons:ap15",
	});
}

export default Component;
