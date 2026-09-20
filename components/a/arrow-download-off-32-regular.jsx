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
		"content": `<style>.zwac010mp {
  fill: currentColor;
  d: path("m19.5 20.914l8.793 8.793a1 1 0 0 0 1.414-1.414l-26-26a1 1 0 0 0-1.414 1.414L15 16.415v4.17l-5.293-5.292a1 1 0 0 0-1.414 1.414l7 7a1 1 0 0 0 1.414 0zM18.086 19.5L17 20.586v-2.171zm3.889-1.06l-1.415-1.414l1.733-1.733a1 1 0 0 1 1.414 1.414zM15 4v7.466l2 2V4a1 1 0 1 0-2 0M7 27a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2z");
}
</style><path class="zwac010mp"/>`,
		"fallback": "fluent:arrow-download-off-32-regular",
	});
}

export default Component;
