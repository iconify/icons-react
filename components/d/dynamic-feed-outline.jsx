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
		"content": `<style>.va9fgcbev {
  fill: currentColor;
  d: path("M4 21q-.825 0-1.412-.587T2 19v-7h2v7h9v2zm4-4q-.825 0-1.412-.587T6 15V8h2v7h9v2zm4-4q-.825 0-1.412-.587T10 11V5q0-.825.588-1.412T12 3h8q.825 0 1.413.588T22 5v6q0 .825-.587 1.413T20 13zm0-2h8V7h-8z");
}
</style><path class="va9fgcbev"/>`,
		"fallback": "material-symbols:dynamic-feed-outline",
	});
}

export default Component;
