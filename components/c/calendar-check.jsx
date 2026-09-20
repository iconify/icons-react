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
		"content": `<style>.g7tu1cbrf {
  fill: currentColor;
  d: path("M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v6.375l-2 2V10H5v10h6.2l2 2zm11.55.5L13 18.95l1.4-1.4l2.125 2.125l4.25-4.25l1.4 1.425z");
}
</style><path class="g7tu1cbrf"/>`,
		"fallback": "material-symbols:calendar-check",
	});
}

export default Component;
