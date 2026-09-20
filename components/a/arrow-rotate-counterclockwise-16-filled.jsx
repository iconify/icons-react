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
		"content": `<style>.z3b8w1bgp {
  fill: currentColor;
  d: path("M8 1.75A6.25 6.25 0 0 1 14.25 8a.75.75 0 0 1-1.5 0a4.75 4.75 0 1 0-8.25 3.212v-.462a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h.913A6.25 6.25 0 0 1 8 1.75m0 4a2.25 2.25 0 1 1 0 4.5a2.25 2.25 0 0 1 0-4.5m0 1.5a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5");
}
</style><path class="z3b8w1bgp"/>`,
		"fallback": "fluent:arrow-rotate-counterclockwise-16-filled",
	});
}

export default Component;
