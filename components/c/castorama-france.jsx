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
		"content": `<style>.bxq5ge8tm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.692 33.193c-5.077 5.076-13.308 5.076-18.385 0c-5.077-5.077-5.077-13.308 0-18.385s13.308-5.077 18.385 0l-4.596 5.014c-1.621-2.093-4.278-2.865-6.648-1.93S11.5 21.267 11.5 24s1.578 5.173 3.948 6.108s5.027.163 6.648-1.93z");
}

.jgpj4u-uz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30 20.5h10a3.5 3.5 0 0 1 3.5 3.5h0a3.5 3.5 0 0 1-3.5 3.5H30a3.5 3.5 0 0 1-3.5-3.5h0a3.5 3.5 0 0 1 3.5-3.5");
}
</style><path class="jgpj4u-uz"/><path class="bxq5ge8tm"/>`,
		"fallback": "arcticons:castorama-france",
	});
}

export default Component;
