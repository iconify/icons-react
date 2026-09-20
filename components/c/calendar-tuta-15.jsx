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

.xadsz3b7l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m16.917 22.78l4.205-1.98m0 0L16.72 35.2m5.794-1.215c.739.833 1.587 1.215 3.997 1.215h.414c2.23 0 4.59-1.807 5.271-4.037c.682-2.23-.573-4.037-2.802-4.037H24.61l1.934-6.326h8.82");
}
</style><path class="xadsz3b7l"/><path class="bag4m3bbr"/>`,
		"fallback": "arcticons:calendar-tuta-15",
	});
}

export default Component;
