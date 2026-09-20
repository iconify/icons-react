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
		"content": `<style>.q0h2be1dg {
  fill: currentColor;
  d: path("M4.5 3A1.5 1.5 0 0 0 3 4.5v2a.5.5 0 0 1-1 0v-2A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-2a.5.5 0 0 1 0-1h2a1.5 1.5 0 0 0 1.5-1.5V8H9.5A1.5 1.5 0 0 1 8 6.5V3zM9 3v3.5a.5.5 0 0 0 .5.5H13V4.5A1.5 1.5 0 0 0 11.5 3zm-6.5 7a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-2.793l-3.146 3.147a.5.5 0 0 1-.708-.708L5.293 10z");
}
</style><path class="q0h2be1dg"/>`,
		"fallback": "fluent:contract-up-right-16-regular",
	});
}

export default Component;
