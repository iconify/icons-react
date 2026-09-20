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
		"content": `<style>.z4vu8bcej {
  fill: currentColor;
  d: path("M5.4 2a1.5 1.5 0 0 0-1.3.75l-2.599 4.5a1.5 1.5 0 0 0 0 1.5l2.6 4.5a1.5 1.5 0 0 0 1.298.75h5.2a1.5 1.5 0 0 0 1.3-.75l2.599-4.5a1.5 1.5 0 0 0 0-1.5l-2.6-4.5A1.5 1.5 0 0 0 10.6 2z");
}
</style><path class="z4vu8bcej"/>`,
		"fallback": "fluent:hexagon-16-filled",
	});
}

export default Component;
