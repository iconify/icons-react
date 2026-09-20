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
		"content": `<style>.qhgoqx48t {
  fill: currentColor;
  d: path("M5.5 2A1.5 1.5 0 0 0 4 3.5V6a2 2 0 0 0-2 2v4.5A1.5 1.5 0 0 0 3.5 14h6a2.5 2.5 0 0 1-.45-1H3.5a.5.5 0 0 1-.5-.5V8a1 1 0 0 1 1-1h5.05c.075-.37.231-.71.45-1H5V3.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1.55q.243-.05.5-.05h.5V3.5A1.5 1.5 0 0 0 10.5 2zm6 4A1.5 1.5 0 0 0 10 7.5v5a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 12.5 6zM11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-6 1a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0M4.5 11a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1M7 8.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0M6.5 11a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1");
}
</style><path class="qhgoqx48t"/>`,
		"fallback": "fluent:fax-16-regular",
	});
}

export default Component;
