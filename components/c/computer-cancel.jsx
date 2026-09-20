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
		"content": `<style>.uskjx7vma {
  fill: currentColor;
  d: path("M1 21v-2h22v2zm3-3q-.825 0-1.412-.587T2 16V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v11q0 .825-.587 1.413T20 18zm5.4-3.5l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6L16 7.9l-1.4-1.4L12 9.1L9.4 6.5L8 7.9l2.6 2.6L8 13.1z");
}
</style><path class="uskjx7vma"/>`,
		"fallback": "material-symbols:computer-cancel",
	});
}

export default Component;
