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
		"content": `<style>.e72ib6b_b {
  fill: currentColor;
  d: path("m12.707 8l4.147-4.146a.5.5 0 0 0-.708-.708L12 7.293V3.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1zM6 4a2 2 0 0 0-2 2v4h4a2 2 0 0 1 2 2v4h4a2 2 0 0 0 2-2v-2.5a.5.5 0 0 1 1 0V14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h2.5a.5.5 0 0 1 0 1z");
}
</style><path class="e72ib6b_b"/>`,
		"fallback": "fluent:contract-down-left-20-filled",
	});
}

export default Component;
