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
		"content": `<style>.u7qotzm2a {
  fill: currentColor;
  d: path("M7.707 8.5H14.5a.5.5 0 0 0 0-1H7.707l2.147-2.146a.5.5 0 0 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708zM1 8a2 2 0 1 1 4 0a2 2 0 0 1-4 0");
}
</style><path class="u7qotzm2a"/>`,
		"fallback": "fluent:arrow-step-in-left-16-filled",
	});
}

export default Component;
