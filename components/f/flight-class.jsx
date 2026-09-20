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
		"content": `<style>.tsuk7kbjs {
  fill: currentColor;
  d: path("M14 13q-.825 0-1.412-.587T12 11V6q0-.825.588-1.412T14 4h2q.825 0 1.413.588T18 6v5q0 .825-.587 1.413T16 13zm-4.5 5q-.675 0-1.2-.387t-.725-1.038L5 8V4h2v4l2.5 8H18v2zM8 21v-2h10v2z");
}
</style><path class="tsuk7kbjs"/>`,
		"fallback": "material-symbols:flight-class",
	});
}

export default Component;
