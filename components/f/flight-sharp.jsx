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
		"content": `<style>.v33ql1b9k {
  fill: currentColor;
  d: path("M7 22v-2.5l3-2.1v-3.6L2 17v-3l8-5.6V4q0-.825.588-1.412T12 2t1.413.588T14 4v4.4l8 5.6v3l-8-3.2v3.6l3 2.1V22l-5-1.5z");
}
</style><path class="v33ql1b9k"/>`,
		"fallback": "material-symbols:flight-sharp",
	});
}

export default Component;
