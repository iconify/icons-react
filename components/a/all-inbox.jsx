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
		"content": `<style>.h3kysbc0a {
  fill: currentColor;
  d: path("M14 13q.85 0 1.425-.587T16 11h4V4H8v7h4q0 .825.588 1.413T14 13m-6 5q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-4 4q-.825 0-1.412-.587T2 20V6h2v14h14v2z");
}
</style><path class="h3kysbc0a"/>`,
		"fallback": "material-symbols:all-inbox",
	});
}

export default Component;
