import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.e5skefbem {
  fill: currentColor;
  d: path("M22.006 11h-12v3h12zm-3 9h3v2h-3zM9 4a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V9a5 5 0 0 0-5-5zm-.994 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2zm11 7h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2m-11 1a1 1 0 0 1 1-1h5a1 1 0 0 1 0 2h-5a1 1 0 0 1-1-1m1 3h5a1 1 0 0 1 0 2h-5a1 1 0 1 1 0-2");
}
</style><path class="e5skefbem"/>`,
		"fallback": "fluent:content-view-32-filled",
	});
}

export default Component;
