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
		"content": `<style>.hm0mjsb4x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m14.597 17.362l.851 2.619h2.753l-2.227 1.618l.851 2.619l-2.228-1.618l-2.228 1.618l.851-2.619l-2.228-1.618h2.754zm9.403 0l.851 2.619h2.754l-2.228 1.618l.851 2.619L24 22.6l-2.228 1.618l.851-2.619l-2.228-1.618h2.754zm9.403 0l.851 2.619h2.754l-2.228 1.618l.851 2.619l-2.228-1.618l-2.228 1.618l.851-2.619l-2.227-1.618h2.753z");
}

.m_3h2obps {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.284 8.669H8.716A4.216 4.216 0 0 0 4.5 12.885v15.81a4.216 4.216 0 0 0 4.216 4.217h10.905l3.37 5.837a1.164 1.164 0 0 0 2.017 0l3.37-5.837h10.906a4.216 4.216 0 0 0 4.216-4.217v-15.81a4.216 4.216 0 0 0-4.216-4.217");
}
</style><path class="hm0mjsb4x"/><path class="m_3h2obps"/>`,
		"fallback": "arcticons:feedback-2",
	});
}

export default Component;
