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
		"content": `<style>.p8yycs57f {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M7.375 2.25h9.25q2.123 0 3.624 1.501t1.501 3.624v9.25q0 2.123-1.501 3.624t-3.624 1.501h-9.25q-2.123 0-3.624-1.501T2.25 16.625v-9.25q0-2.123 1.501-3.624T7.375 2.25M10 6q-4 0-4 4t4 4q.126 0 .25-.007v1.257q0 2.5 2.5 2.5h2.5q2.5 0 2.5-2.5v-2.5q0-2.5-2.5-2.5h-1.257Q14 10.126 14 10q0-1.657-1.172-2.828Q11.657 6 10 6");
}
</style><path class="p8yycs57f"/>`,
		"fallback": "uix-solid:blend-overlay",
	});
}

export default Component;
