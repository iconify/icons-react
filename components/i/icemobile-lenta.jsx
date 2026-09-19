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
		"content": `<style>.iboad-2pd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.386 4.5c7.999 0 14.495 6.567 14.495 14.675S33.385 33.85 25.386 33.85c-8.008 0-14.495-6.566-14.495-14.675S17.378 4.5 25.386 4.5");
}

.tiemwtbhb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.847 43.45Q11.813 41.608 8.119 31.638q11.821 0 17.728 11.812m.41.05q3.654-8.169 12.333-8.539q-3.884 7.758-12.333 8.539");
}

.vsicmldrr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.477 11.687c4.084 0 7.397 3.314 7.397 7.398s-3.313 7.388-7.398 7.388s-7.397-3.304-7.397-7.388s3.313-7.398 7.397-7.398");
}
</style><path class="vsicmldrr"/><path class="iboad-2pd"/><path class="tiemwtbhb"/>`,
		"fallback": "arcticons:icemobile-lenta",
	});
}

export default Component;
