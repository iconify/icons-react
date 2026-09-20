import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.kphqkcbjx {
  fill: currentColor;
  d: path("M1 6a.5.5 0 0 1 .5-.5h3.793L4.146 4.354a.5.5 0 1 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 1 1-.708-.708L5.293 6.5H1.5A.5.5 0 0 1 1 6m8.5-1.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m0 1a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1");
}
</style><path class="kphqkcbjx"/>`,
		"fallback": "fluent:arrow-step-in-right-12-regular",
	});
}

export default Component;
