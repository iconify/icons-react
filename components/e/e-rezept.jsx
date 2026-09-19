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
		"content": `<style>.fu4frftud {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m36.551 24l3.35 3.35a8.875 8.875 0 0 1 0 12.55h0a8.875 8.875 0 0 1-12.552 0L8.1 20.65a8.875 8.875 0 0 1 0-12.55h0a8.875 8.875 0 0 1 12.552 0L24 11.448");
}

.tmxqompcp {
  width: 44.974px;
  height: 17.75px;
  x: 1.513px;
  y: 15.125px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 8.875px;
}
</style><rect transform="rotate(-45 24 24)" class="tmxqompcp"/><path class="fu4frftud"/>`,
		"fallback": "arcticons:e-rezept",
	});
}

export default Component;
