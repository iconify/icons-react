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
		"content": `<style>.ner54rqfb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.781 18.166h21.391l-4.606-4.606m4.606 4.618l-4.606 4.606M6.16 32.646h21.287L22.84 28.04m4.607 4.618l-4.606 4.606m14.76 5.236v-37l-4.606 4.606M37.613 5.5l4.606 4.606");
}
</style><path class="ner54rqfb"/>`,
		"fallback": "arcticons:arrow-escape",
	});
}

export default Component;
