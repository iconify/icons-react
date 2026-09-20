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
		"content": `<style>.dz789kjgc {
  fill: currentColor;
  d: path("M11 21H5q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h6zm-2-2V5H5v14zm4-8V3h6q.825 0 1.413.588T21 5v6zm2-2h4V5h-4zm-2 12v-8h8v6q0 .825-.587 1.413T19 21zm2-2h4v-4h-4zm0-4");
}
</style><path class="dz789kjgc"/>`,
		"fallback": "material-symbols:auto-awesome-mosaic-outline-rounded",
	});
}

export default Component;
