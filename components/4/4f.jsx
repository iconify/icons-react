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

.s-ycm3bkb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m20.522 31.591l2.677-15.182l-9.947 10.198h5.85M28.109 24h3.953m-7.582 7.591l2.316-13.137a2.475 2.475 0 0 1 2.437-2.045h5.515");
}
</style><rect class="j3s9ivbxi"/><path class="s-ycm3bkb"/>`,
		"fallback": "arcticons:4f",
	});
}

export default Component;
