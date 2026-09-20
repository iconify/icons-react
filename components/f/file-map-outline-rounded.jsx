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
		"content": `<style>.xtiw7cbyy {
  fill: currentColor;
  d: path("M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zm7-13q-1.9 0-3.35 1.325t-1.45 3.6q0 1.825 1.425 3.6t2.7 2.9q.15.125.325.188t.35.062t.35-.062t.325-.188q1.275-1.125 2.7-2.9t1.425-3.6q0-2.275-1.45-3.6T12 6m-.888 5.888q-.362-.363-.362-.888t.363-.888T12 9.75t.888.363t.362.887t-.363.888t-.887.362t-.888-.363M5 19V5z");
}
</style><path class="xtiw7cbyy"/>`,
		"fallback": "material-symbols:file-map-outline-rounded",
	});
}

export default Component;
