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
		"content": `<style>.fskv5_56t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.533 29.967c0 7.474-6.06 13.533-13.533 13.533s-13.533-6.059-13.533-13.533C10.467 19.094 24 4.5 24 4.5s13.533 14.594 13.533 25.467");
}
</style><path class="fskv5_56t"/>`,
		"fallback": "arcticons:eksi-sozluk",
	});
}

export default Component;
