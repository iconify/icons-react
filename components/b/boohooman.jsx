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
		"content": `<style>.a2mhxub6p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.794 24.75v4.375m-2.148-5.875l2.149-4.36v4.36m-7.198 1.5l2.153 4.375l2.156-4.375m-7.2-1.5v-4.375l2.153 4.375m-2.153 5.863V24.75m28.588-1.5v-4.375m-2.853 5.875l2.853 4.375V24.75m-6.684-1.5v-4.375l2.853 4.375m-2.853 5.875V24.75m-3.992 0l1.426 4.375m-4.768-5.875l1.426-4.375l1.427 4.375m-4.768 5.875l1.426-4.375");
}

.j3s9ivbxi {
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
</style><rect class="j3s9ivbxi"/><path class="a2mhxub6p"/>`,
		"fallback": "arcticons:boohooman",
	});
}

export default Component;
