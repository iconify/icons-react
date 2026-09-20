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
		"content": `<style>.upur-bttk {
  fill: currentColor;
  d: path("M4 14.692h16V7.116H4zm-1 1V6.116h18v9.576h-2v1.27h-1v-1.27H6v1.27H5v-1.27zm1-1V7.116zm13.682-2.626q.434-.433.434-1.066t-.434-1.066t-1.066-.434t-1.067.434q-.433.433-.433 1.066t.433 1.066t1.067.434t1.066-.434M6.385 12.5h6.461v-3H6.385z");
}
</style><path class="upur-bttk"/>`,
		"fallback": "material-symbols-light:audio-video-receiver-outline-sharp",
	});
}

export default Component;
