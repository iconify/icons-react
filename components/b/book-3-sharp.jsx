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
		"content": `<style>.yqfy_5bov {
  fill: currentColor;
  d: path("M7.5 22q-1.475 0-2.488-1.012T4 18.5v-13q0-1.45 1.013-2.475T7.5 2H20v15q-.65 0-1.075.438T18.5 18.5q0 .65.425 1.075T20 20v2zm1.225-9H9.95l.625-1.775H13.4L14.025 13h1.225L12.6 6h-1.25zm2.2-2.8l1.025-2.9h.075l1.025 2.9zM7.5 20h9.325q-.15-.35-.237-.712T16.5 18.5q0-.4.075-.775t.25-.725H7.5q-.65 0-1.075.438T6 18.5q0 .65.425 1.075T7.5 20");
}
</style><path class="yqfy_5bov"/>`,
		"fallback": "material-symbols:book-3-sharp",
	});
}

export default Component;
