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
		"content": `<style>.glq9-8bco {
  fill: currentColor;
  d: path("M2 12.5A4.5 4.5 0 0 1 6.5 8h17a4.5 4.5 0 0 1 4.5 4.5v.5h.5a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5H28v.5a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 2 19.5zm4 .5v6a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1");
}
</style><path class="glq9-8bco"/>`,
		"fallback": "fluent:battery-7-32-filled",
	});
}

export default Component;
