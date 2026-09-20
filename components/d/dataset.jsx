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
		"content": `<style>.h96tbwyms {
  fill: currentColor;
  d: path("M7 17h4v-4H7zm6 0h4v-4h-4zm-6-6h4V7H7zm6 0h4V7h-4zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z");
}
</style><path class="h96tbwyms"/>`,
		"fallback": "material-symbols:dataset",
	});
}

export default Component;
