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
		"content": `<style>.s0ykeobmr {
  fill: currentColor;
  d: path("M5 21q-.825 0-1.412-.587T3 19V9q0-.825.588-1.412T5 7h2V5q0-.825.588-1.412T9 3h6q.825 0 1.413.588T17 5v6h2q.825 0 1.413.588T21 13v6q0 .825-.587 1.413T19 21h-6v-4h-2v4zm0-2h2v-2H5zm0-4h2v-2H5zm0-4h2V9H5zm4 4h2v-2H9zm0-4h2V9H9zm0-4h2V5H9zm4 8h2v-2h-2zm0-4h2V9h-2zm0-4h2V5h-2zm4 12h2v-2h-2zm0-4h2v-2h-2z");
}
</style><path class="s0ykeobmr"/>`,
		"fallback": "material-symbols:apartment-outline-rounded",
	});
}

export default Component;
