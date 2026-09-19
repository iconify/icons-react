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
		"content": `<style>.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.vulj4dbzn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.745 20.765a2.71 2.71 0 0 0-2.324-1.316a2.715 2.715 0 0 0-2.533 3.686c.898 2.583 4.857 5.416 4.857 5.416s3.96-2.833 4.857-5.416a2.715 2.715 0 0 0-2.533-3.687a2.71 2.71 0 0 0-2.324 1.317M10 19.449v9.102h4.551m16.676-9.102l-3.015 9.102l-3.016-9.102M33.449 24h2.967M38 28.551h-4.551v-9.102H38");
}
</style><path class="vulj4dbzn"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:couple-widget",
	});
}

export default Component;
