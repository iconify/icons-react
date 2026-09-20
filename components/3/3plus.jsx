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

.u1npwjb1e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.774 29.051v4.771m-2.386-2.385h4.772m-18.543-7.429h3.597M9.5 15.857c1.438-1.199 2.877-1.68 5.993-1.68h.72a4.81 4.81 0 0 1 4.795 4.796c0 2.638-2.158 4.983-4.795 4.983M9.5 31.92c1.438 1.199 2.637 1.678 5.993 1.678h.72a4.81 4.81 0 0 0 4.795-4.795a4.81 4.81 0 0 0-4.795-4.795m19.181.481V30.7m-3.105-3.106H38.5m-7.786-12.778v8.996m-4.499-4.498h8.997");
}
</style><path class="u1npwjb1e"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:3plus",
	});
}

export default Component;
