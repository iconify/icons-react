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
		"content": `<style>.p54r1vbso {
  fill: currentColor;
  d: path("M10.5 5h3.25L10 1.25V4.5a.5.5 0 0 0 .5.5m0 1A1.5 1.5 0 0 1 9 4.5V1H5.5A1.5 1.5 0 0 0 4 2.5v2.901A3 3 0 0 1 8.5 8v.063A2 2 0 0 1 10 10v4c0 .364-.097.706-.268 1H12.5a1.5 1.5 0 0 0 1.5-1.5V6zm1.5 6.5a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 1 0zM3.5 8v1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5V8a2 2 0 1 0-4 0m1 1V8a1 1 0 0 1 2 0v1zm1 2.25a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5");
}
</style><path class="p54r1vbso"/>`,
		"fallback": "fluent:document-data-lock-16-filled",
	});
}

export default Component;
