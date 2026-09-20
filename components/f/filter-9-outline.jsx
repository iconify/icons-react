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
		"content": `<style>.tfwjn5bcj {
  fill: currentColor;
  d: path("M12 15h3q.825 0 1.413-.587T17 13V7q0-.825-.587-1.412T15 5h-2q-.825 0-1.412.588T11 7v2q0 .825.588 1.413T13 11h2v2h-3zm3-6h-2V7h2zm-7 9q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm0-2h12V4H8zm-4 6q-.825 0-1.412-.587T2 20V6h2v14h14v2zM8 4v12z");
}
</style><path class="tfwjn5bcj"/>`,
		"fallback": "material-symbols:filter-9-outline",
	});
}

export default Component;
