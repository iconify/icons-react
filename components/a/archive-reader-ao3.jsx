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
		"content": `<style>.fr5b7ybdf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 5.5v37m17.7-29.1H6.3M34 33.8H14m10-20.4c-4.4 8-11.6 16.3-17.3 21.1M24 13.4c4.4 8 11.6 16.3 17.3 21.1");
}
</style><path class="fr5b7ybdf"/>`,
		"fallback": "arcticons:archive-reader-ao3",
	});
}

export default Component;
