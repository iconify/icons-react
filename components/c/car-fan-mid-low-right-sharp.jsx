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
		"content": `<style>.u836jzbjr {
  fill: currentColor;
  d: path("M10.725 23L9 22l4.025-7H16.5l1.45-5.025q.25-.875.925-1.425T20.4 8q1.2 0 1.963.912t.537 2.113L21.5 18h-7.875zM21 7q-.825 0-1.412-.587T19 5t.588-1.412T21 3t1.413.588T23 5t-.587 1.413T21 7m-10 4L9.6 9.6L12.175 7H6V5h6.175L9.6 2.425L11 1l5 5zm-5 8l-5-5l1.425-1.4L5 15.175V9h2v6.175L9.6 12.6L11 14z");
}
</style><path class="u836jzbjr"/>`,
		"fallback": "material-symbols:car-fan-mid-low-right-sharp",
	});
}

export default Component;
