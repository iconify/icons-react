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
		"content": `<style>.uknvs-c1q {
  fill: currentColor;
  d: path("M5 16h2q0-.825-.587-1.412T5 14zm3.55 0H10q0-2.075-1.463-3.537T5 11v1.45q1.475 0 2.513 1.038T8.55 16m3 0H13q0-1.65-.625-3.113t-1.713-2.55t-2.55-1.712T5 8v1.45q2.725 0 4.638 1.913T11.55 16M8 21v-2H4q-.825 0-1.412-.587T2 17V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v12q0 .825-.587 1.413T20 19h-4v2zm-4-4h16V5H4zm0 0V5z");
}
</style><path class="uknvs-c1q"/>`,
		"fallback": "material-symbols:connected-tv-outline",
	});
}

export default Component;
