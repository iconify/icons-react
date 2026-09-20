import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.pgt1ghv8z {
  fill: currentColor;
  d: path("M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm3-4h8v-2h-6v-2h5v-2h-5V9h6V7H8z");
}
</style><path class="pgt1ghv8z"/>`,
		"fallback": "material-symbols:e-mobiledata-badge",
	});
}

export default Component;
