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
		"content": `<style>.bag4m3bbr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 42.27h28.377L42.5 13.893H14.123zm37-28.428H14.123L5.5 5.73h28.377zM5.5 42.27V5.73");
}

.z68nxd5ol {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.563 25.6c.815-2.667 3.6-4.8 6.09-4.8s4.148 2.133 3.332 4.8c-.38 1.244-1.294 2.489-2.455 3.378c-2.444 1.6-9.902 6.222-9.902 6.222h9.422m11.136 0l4.403-14.4l-10.712 9.72h9.54");
}
</style><path class="z68nxd5ol"/><path class="bag4m3bbr"/>`,
		"fallback": "arcticons:calendar-tuta-24",
	});
}

export default Component;
