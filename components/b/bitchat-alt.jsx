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
		"content": `<style>.nev6kacgb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m18.188 26.81l11.625-11.625l-5.812-5.812v23.25l5.812-5.813l-11.625-11.625m14.062 5.813h.5m-1.188 8.312h.5m1-16.124h.5M15.25 21.498h.5");
}

.ow1mepgeq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.5 5.498c4.432 0 8 3.568 8 8v15c0 4.432-3.568 8-8 8H14.328l-5.414 5.414c-1.26 1.26-3.413.368-3.414-1.414v-31a4 4 0 0 1 4-4z");
}
</style><path class="ow1mepgeq"/><path class="nev6kacgb"/>`,
		"fallback": "arcticons:bitchat-alt",
	});
}

export default Component;
