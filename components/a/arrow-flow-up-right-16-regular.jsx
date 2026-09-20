import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.h4cj8hb4r {
  fill: currentColor;
  d: path("M11.854 2.146a.5.5 0 0 0-.708.708L13.293 5H9.5a2 2 0 0 0-2 2v2a1 1 0 0 1-1 1h-.55a2.5 2.5 0 1 0 0 1h.55a2 2 0 0 0 2-2V7a1 1 0 0 1 1-1h3.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708zM5 10.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0");
}
</style><path class="h4cj8hb4r"/>`,
		"fallback": "fluent:arrow-flow-up-right-16-regular",
	});
}

export default Component;
