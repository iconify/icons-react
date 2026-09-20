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
		"content": `<style>.cyru6fa2y {
  fill: currentColor;
  d: path("M10.725 23L9 22l4.025-7H16.5l1.45-5.025q.25-.875.925-1.425T20.4 8q1.2 0 1.963.912t.537 2.113L21.5 18h-7.875zM21 7q-.825 0-1.412-.587T19 5t.588-1.412T21 3t1.413.588T23 5t-.587 1.413T21 7M7 12L2 7l1.4-1.425l2.6 2.6V2h2v6.175L10.6 5.6L12 7z");
}
</style><path class="cyru6fa2y"/>`,
		"fallback": "material-symbols:car-fan-low-right-sharp",
	});
}

export default Component;
