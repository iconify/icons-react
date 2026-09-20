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
		"content": `<style>.iaxy3nbbv {
  fill: currentColor;
  d: path("M11 15h4q.825 0 1.413-.587T17 13v-1.5q0-.65-.425-1.075T15.5 10q.65 0 1.075-.425T17 8.5V7q0-.825-.587-1.412T15 5h-4v2h4v2h-2v2h2v2h-4zm-3 3q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-4 4q-.825 0-1.412-.587T2 20V6h2v14h14v2z");
}
</style><path class="iaxy3nbbv"/>`,
		"fallback": "material-symbols:filter-3",
	});
}

export default Component;
