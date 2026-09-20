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
		"content": `<style>.erds22bow {
  fill: currentColor;
  d: path("M11 1a2 2 0 0 1 2 2v9.497a.5.5 0 0 1-.5.5H4V13a1 1 0 0 0 1 1h7.5a.5.5 0 0 1 0 1H5a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM5 2a1 1 0 0 0-1 1v8.997h8V3a1 1 0 0 0-1-1zm4.3 5a1.2 1.2 0 0 1 1.2 1.2c0 .829-.781 1.8-2.5 1.8s-2.5-.971-2.5-1.8A1.2 1.2 0 0 1 6.7 7zM8 3.5A1.25 1.25 0 1 1 8 6a1.25 1.25 0 0 1 0-2.5");
}
</style><path class="erds22bow"/>`,
		"fallback": "fluent:book-contacts-16-regular",
	});
}

export default Component;
