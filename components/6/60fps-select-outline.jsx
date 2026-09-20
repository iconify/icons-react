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
		"content": `<style>.sg__edczq {
  fill: currentColor;
  d: path("M9 14H6q-.825 0-1.412-.587T4 12V6q0-.825.588-1.412T6 4h5v2H6v2h3q.825 0 1.413.588T11 10v2q0 .825-.587 1.413T9 14m-3-4v2h3v-2zm12 4h-3q-.825 0-1.412-.587T13 12V6q0-.825.588-1.412T15 4h3q.825 0 1.413.588T20 6v6q0 .825-.587 1.413T18 14m0-2V6h-3v6zM3 22v-5h2v5zm4 0v-5h2v5zm4 0v-5h2v5zm4 0v-5h6v5z");
}
</style><path class="sg__edczq"/>`,
		"fallback": "material-symbols:60fps-select-outline",
	});
}

export default Component;
