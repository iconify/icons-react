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
		"content": `<style>.wddddob_i {
  fill: currentColor;
  d: path("M2 19V5h20v3h-2l-5 5H6v2h7l-4 4zm4-8h6V9H6zm7 10v-1.75l6.65-6.65l1.75 1.75L14.75 21zm9-7.25L20.25 12l.9-.9q.125-.125.275-.125t.275.125l1.2 1.2q.125.125.125.275t-.125.275z");
}
</style><path class="wddddob_i"/>`,
		"fallback": "material-symbols:checkbook-sharp",
	});
}

export default Component;
