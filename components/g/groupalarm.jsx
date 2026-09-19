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
		"content": `<style>.acieezf7a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.472 16.297a8.525 8.525 0 0 1 10.772 5.415h0a8.525 8.525 0 0 1-5.416 10.773h0M15.04 22.474a4.77 4.77 0 0 0-4.77-4.77h0a4.77 4.77 0 0 0-4.77 4.77v4.86a4.77 4.77 0 0 0 4.77 4.769h0a4.77 4.77 0 0 0 4.77-4.77h-4.77m15.316-.223h-6.103m-1.654 4.993l4.77-14.399l4.769 14.399");
}

.djv527b4d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.33 9.821c8.046-2.662 16.727 1.703 19.389 9.749h0c2.662 8.046-1.702 16.727-9.748 19.39");
}

.t9_8glbid {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.4 13.059c6.259-2.07 13.01 1.324 15.081 7.582s-1.324 13.01-7.582 15.081h0");
}
</style><path class="djv527b4d"/><path class="t9_8glbid"/><path class="acieezf7a"/>`,
		"fallback": "arcticons:groupalarm",
	});
}

export default Component;
