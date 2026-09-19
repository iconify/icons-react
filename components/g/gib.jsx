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
		"content": `<style>.n5cugkiei {
  cx: 35.107px;
  cy: 15.293px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4.808px;
  ry: 3.236px;
}

.nhb5x6mgb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.107 43.5a32.4 32.4 0 0 1-1.438-19.238C23.556 16.205 28.688 8.957 35.66 4.5H20.832c-5.594 5.185-9.42 12.245-10.713 19.762A35.27 35.27 0 0 0 12.235 43.5z");
}

.zk_u6kbsr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.262 21.51l-.919 4.318h6.322l-4.446 17.67h8.053l3.712-21.988z");
}
</style><path class="nhb5x6mgb"/><path class="zk_u6kbsr"/><ellipse transform="rotate(-82.098 35.107 15.294)" class="n5cugkiei"/>`,
		"fallback": "arcticons:gib",
	});
}

export default Component;
