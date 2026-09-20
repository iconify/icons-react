import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.q4zs3gwqt {
  fill: currentColor;
  d: path("M24 6c9.941 0 18 8.059 18 18a1.5 1.5 0 0 1-3 0c0-8.284-6.716-15-15-15S9 15.716 9 24c0 5.343 2.794 10.03 7 12.688V32a1.5 1.5 0 0 1 3 0v8.5a1.5 1.5 0 0 1-1.5 1.5H9a1.5 1.5 0 0 1 0-3h5.05C9.198 35.776 6 30.262 6 24c0-9.941 8.059-18 18-18m0 12a6 6 0 1 1 0 12a6 6 0 0 1 0-12m0 3a3 3 0 1 0 0 6a3 3 0 0 0 0-6");
}
</style><path class="q4zs3gwqt"/>`,
		"fallback": "fluent:arrow-rotate-counterclockwise-48-filled",
	});
}

export default Component;
