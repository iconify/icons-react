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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.o0-5cmbnp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m32.11 21.074l1.843 5.565l1.843-5.565m4.313 2.772a1.391 1.391 0 1 1 0 2.782h-2.296v-5.565h2.296a1.391 1.391 0 1 1 0 2.783m0 0h-2.296m-7.531-1.053a1.844 1.844 0 0 0-1.844-1.843h0a1.844 1.844 0 0 0-1.843 1.843v1.879c0 1.018.825 1.843 1.843 1.843h0a1.844 1.844 0 0 0 1.844-1.843h-1.844M6.534 22.113l4.5-.007l3.952-2.289M6.5 25.809l5.339-.081l6.381-3.63l5.11-.056m-.014 3.755l-4.457-.053l-4.012 2.439");
}
</style><circle class="cpk0fnbgt"/><path class="o0-5cmbnp"/>`,
		"fallback": "arcticons:gvb",
	});
}

export default Component;
