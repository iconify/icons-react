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
		"content": `<style>.n8j_1t6qc {
  cx: 24px;
  cy: 24px;
  r: 12.8px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.nrzcrmb4v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 24c0-5.9 4.8-10.8 10.8-10.8S45.6 18 45.6 24H24.1Zm0 0c5.9 0 10.8 4.8 10.8 10.8S30 45.6 24 45.6V24.1Zm0 0c0 5.9-4.8 10.8-10.8 10.8S2.5 29.9 2.5 24zm0 0c-5.9 0-10.8-4.8-10.8-10.8S18.1 2.5 24 2.5z");
}
</style><path class="nrzcrmb4v"/><circle class="n8j_1t6qc"/>`,
		"fallback": "arcticons:breezyweather",
	});
}

export default Component;
