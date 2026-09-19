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
		"content": `<style>.h49j7v2we {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.7 35.1v-7.4h-7.4m0-7.4h7.4m7.4 22.2h-7.4m7.4-7.4h7.4v7.4H20.3v-7.4h7.4");
}

.ocyq9kbkj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.7 12.9v7.4h-7.4v-7.4H5.5V5.5h22.2zm0 0h7.4v22.2m-14.8 0h-7.4V20.3h7.4z");
}
</style><path class="ocyq9kbkj"/><path class="h49j7v2we"/>`,
		"fallback": "arcticons:breakout-71",
	});
}

export default Component;
