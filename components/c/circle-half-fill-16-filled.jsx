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
		"content": `<style>.p6e918bmd {
  fill: currentColor;
  d: path("M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 1.5A5.5 5.5 0 0 0 2.5 8h11A5.5 5.5 0 0 0 8 2.5");
}
</style><path class="p6e918bmd"/>`,
		"fallback": "fluent:circle-half-fill-16-filled",
	});
}

export default Component;
