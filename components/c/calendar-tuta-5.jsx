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

.hs2pvwbxj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.806 33.985c.739.833 1.587 1.215 3.997 1.215h.414c2.23 0 4.59-1.807 5.271-4.037h0c.682-2.23-.573-4.037-2.802-4.037h-4.783l1.934-6.326h8.82");
}
</style><path class="hs2pvwbxj"/><path class="bag4m3bbr"/>`,
		"fallback": "arcticons:calendar-tuta-5",
	});
}

export default Component;
