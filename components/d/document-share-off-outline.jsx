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
		"content": `<style>.n5yfytbls {
  fill: currentColor;
  d: path("m14 2l6 6v2.025h-2V9h-5V4H6.825l-1.75-1.775q.2-.125.425-.175T6 2zm4.588 13.438Q18 14.85 18 14.025t.588-1.412T20 12.025t1.413.588t.587 1.412t-.587 1.413t-1.413.587t-1.412-.587M20.5 23.3l-4.55-4.55q-.575.325-1.225.25t-1.15-.575t-.575-1.15t.25-1.225L6 8.8V20h6v2H6q-.825 0-1.412-.587T4 20V6.8L.7 3.5l1.4-1.4l19.8 19.8z");
}
</style><path class="n5yfytbls"/>`,
		"fallback": "material-symbols:document-share-off-outline",
	});
}

export default Component;
