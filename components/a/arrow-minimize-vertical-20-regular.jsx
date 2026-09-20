import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.r6buck2oo {
  fill: currentColor;
  d: path("M9.5 1a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L9 5.293V1.5a.5.5 0 0 1 .5-.5m-6 8.5A.5.5 0 0 1 4 9h11a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5m6.5 4.207V17.5a.5.5 0 0 1-1 0v-3.793l-1.146 1.147a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708z");
}
</style><path class="r6buck2oo"/>`,
		"fallback": "fluent:arrow-minimize-vertical-20-regular",
	});
}

export default Component;
