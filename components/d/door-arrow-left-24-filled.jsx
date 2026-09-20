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
		"content": `<style>.h3aabkbiz {
  fill: currentColor;
  d: path("M6.25 2.75a1.5 1.5 0 0 0-1.5 1.5v15.5a1.5 1.5 0 0 0 1.5 1.5h5.94a6.5 6.5 0 0 1 7.06-10.012V4.25a1.5 1.5 0 0 0-1.5-1.5zm2.25 10.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m9 9.75a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11m3.5-5.5a.5.5 0 0 1-.5.5h-4.793l1.647 1.646a.5.5 0 0 1-.708.708l-2.5-2.5a.5.5 0 0 1 0-.708l2.5-2.5a.5.5 0 0 1 .708.708L15.707 17H20.5a.5.5 0 0 1 .5.5");
}
</style><path class="h3aabkbiz"/>`,
		"fallback": "fluent:door-arrow-left-24-filled",
	});
}

export default Component;
