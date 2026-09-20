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
		"content": `<style>.g1x43_h_z {
  fill: currentColor;
  d: path("M8.6 15.6L5 12l3.6-3.6L10 9.825L7.825 12L10 14.175zm6.8 0L14 14.175L16.175 12L14 9.825L15.4 8.4L19 12zM5 21q-.825 0-1.412-.587T3 19v-4h2v4h4v2zm10 0v-2h4v-4h2v4q0 .825-.587 1.413T19 21zM3 9V5q0-.825.588-1.412T5 3h4v2H5v4zm16 0V5h-4V3h4q.825 0 1.413.588T21 5v4z");
}
</style><path class="g1x43_h_z"/>`,
		"fallback": "material-symbols:frame-source",
	});
}

export default Component;
