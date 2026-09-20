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
		"content": `<style>.xb3qlgk7e {
  fill: currentColor;
  d: path("M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-9h14V5H5zm0 2v5h14v-5zm0 0v5z");
}
</style><path class="xb3qlgk7e"/>`,
		"fallback": "material-symbols:bottom-sheets-outline-rounded",
	});
}

export default Component;
