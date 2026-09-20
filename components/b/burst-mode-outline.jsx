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
		"content": `<style>.n0nrbvbgc {
  fill: currentColor;
  d: path("M1 19V5h2v14zm4 0V5h2v14zm6 0q-.825 0-1.412-.587T9 17V7q0-.825.588-1.412T11 5h10q.825 0 1.413.588T23 7v10q0 .825-.587 1.413T21 19zm0-2h10V7H11zm1-2h8l-2.6-3.5l-1.9 2.5l-1.4-1.85zm-1 2V7z");
}
</style><path class="n0nrbvbgc"/>`,
		"fallback": "material-symbols:burst-mode-outline",
	});
}

export default Component;
