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

.tg5l10-fj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m16.837 22.78l4.205-1.98m0 0L16.64 35.2m12.802 0l4.403-14.4l-10.712 9.72h9.54");
}
</style><path class="tg5l10-fj"/><path class="bag4m3bbr"/>`,
		"fallback": "arcticons:calendar-tuta-14",
	});
}

export default Component;
