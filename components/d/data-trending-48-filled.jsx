import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ksoaqyfpv {
  fill: currentColor;
  d: path("M7.5 6A1.5 1.5 0 0 1 9 7.5v28a3.5 3.5 0 0 0 3.5 3.5h28a1.5 1.5 0 0 1 0 3h-28A6.5 6.5 0 0 1 6 35.5v-28A1.5 1.5 0 0 1 7.5 6M38 17.121V23.5a1.5 1.5 0 0 0 3 0v-10a1.5 1.5 0 0 0-1.5-1.5h-10a1.5 1.5 0 0 0 0 3h6.379l-8.428 8.428l-4.442-4.038a1.5 1.5 0 0 0-2.037.018l-8.5 8a1.5 1.5 0 1 0 2.056 2.184l7.49-7.049l4.473 4.067a1.5 1.5 0 0 0 2.07-.05z");
}
</style><path class="ksoaqyfpv"/>`,
		"fallback": "fluent:data-trending-48-filled",
	});
}

export default Component;
