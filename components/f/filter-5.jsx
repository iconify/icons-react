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
		"content": `<style>.tj4c3lb-m {
  fill: currentColor;
  d: path("M11 15h4q.825 0 1.413-.587T17 13v-2q0-.825-.587-1.412T15 9h-2V7h4V5h-6v6h4v2h-4zm-3 3q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-4 4q-.825 0-1.412-.587T2 20V6h2v14h14v2z");
}
</style><path class="tj4c3lb-m"/>`,
		"fallback": "material-symbols:filter-5",
	});
}

export default Component;
