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

.l6ps72bmt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.223 20.257v6.236a3.653 3.653 0 0 1-3.645 3.661h-.182a3.653 3.653 0 0 1-3.661-3.645v-6.252m-2.872 9.194l-.16-7.035m-8.228 7.035v-6.09m12.289-8.409l-7.453 7.453c-.638.637-1.61.579-2.301 0l-3.084-2.584m-2.965 9.595c-1.19.553-2.014.79-3.344.79a5.04 5.04 0 0 1-5.04-5.04h0a5.05 5.05 0 0 1 5.04-5.045c1.33-.005 2.154.233 3.344.785");
}
</style><rect class="j3s9ivbxi"/><path class="l6ps72bmt"/>`,
		"fallback": "arcticons:cmu-mobile",
	});
}

export default Component;
