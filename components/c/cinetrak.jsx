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
		"content": `<style>.cur0cipoj {
  cx: 12.947px;
  cy: 10.573px;
  r: 2.086px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.frenpegbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 32.925c0 .982-.4 1.922-1.106 2.605l-5.596 5.527a4.85 4.85 0 0 1-3.453 1.443H9.5a4 4 0 0 1-4-4v-29a4 4 0 0 1 4-4h29a4 4 0 0 1 4 4z");
}

.u6l777bak {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m20.703 8.519l2.054 2.055l-2.054 2.054m7.184-4.109l2.054 2.055l-2.054 2.054m7.183-4.109l2.055 2.055l-2.055 2.054m-6.26 18.601a5.149 5.149 0 0 1-9.62-2.555v-3.347a5.15 5.15 0 0 1 5.149-5.15a5.15 5.15 0 0 1 4.466 2.585");
}
</style><circle class="cur0cipoj"/><path class="u6l777bak"/><path class="frenpegbs"/>`,
		"fallback": "arcticons:cinetrak",
	});
}

export default Component;
