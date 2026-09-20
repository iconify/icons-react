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
		"content": `<style>.mnmkcqdsx {
  fill: currentColor;
  d: path("M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zM19 7.25l-6.05 6.8L9 10.1l-4 4v2.85l4-4L13.05 17L19 10.25z");
}
</style><path class="mnmkcqdsx"/>`,
		"fallback": "material-symbols:bid-landscape",
	});
}

export default Component;
