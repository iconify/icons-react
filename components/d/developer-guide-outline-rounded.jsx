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
		"content": `<style>.lhphhsbdd {
  fill: currentColor;
  d: path("M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zM5 5v14h14V5h-2v6.125q0 .3-.25.438t-.5-.013l-1.225-.75q-.25-.15-.525-.15t-.525.15l-1.225.75q-.25.15-.5.013t-.25-.438V5zm0 14V5z");
}
</style><path class="lhphhsbdd"/>`,
		"fallback": "material-symbols:developer-guide-outline-rounded",
	});
}

export default Component;
