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
		"content": `<style>.pcb19cc9n {
  fill: currentColor;
  d: path("m20.475 23.3l-8.35-8.35l1.95-.9l6.875 6.875q-.25.5-.725.788t-1.05.287H4q-.825 0-1.412-.587T2 20V4.825L.675 3.5L2.1 2.075l19.8 19.8zM22 19.125l-6.4-6.4L13.05 6h-2.1l-.575 1.5l-5.5-5.5H20q.825 0 1.413.588T22 4zM6.4 18h2.1l1.1-3.05h2.525l-1.85-1.85L8.8 11.625zm5.55-9.75h.1l.5 1.425l-.825-.825zM15.5 18h2.1l-.25-.675l-3.275-3.275z");
}
</style><path class="pcb19cc9n"/>`,
		"fallback": "material-symbols:font-download-off",
	});
}

export default Component;
