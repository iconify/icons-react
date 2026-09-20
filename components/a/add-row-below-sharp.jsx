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
		"content": `<style>.et5vydbrr {
  fill: currentColor;
  d: path("M3 10V2h18v8zm0 10v-8h18v8h-4.1q.05-.25.075-.488T17 19q0-2.075-1.45-3.537T12 14t-3.55 1.463T7 19q0 .275.025.513T7.1 20zm8 2v-2H9v-2h2v-2h2v2h2v2h-2v2z");
}
</style><path class="et5vydbrr"/>`,
		"fallback": "material-symbols:add-row-below-sharp",
	});
}

export default Component;
