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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.j5ahyib_q {
  cx: 24px;
  cy: 24px;
  r: 1.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.kc3wg7b7w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.725 22.688l5.564-9.637m-7.542 11.772L9.913 33.917m13.484-11.29l-5.93-12.74l-6.46 14.013m2.18-4.73h8.6m16.223 4.759l-3.501 14l-3.5-14l-3.5 14l-3.12-12.481");
}
</style><path class="kc3wg7b7w"/><circle class="cpk0fnbgt"/><circle class="j5ahyib_q"/>`,
		"fallback": "arcticons:activitywatch",
	});
}

export default Component;
