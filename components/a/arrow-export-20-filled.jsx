import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ltwt3sb5e {
  fill: currentColor;
  d: path("M2.75 3.75a.75.75 0 0 1 .75.75v11a.75.75 0 0 1-1.5 0v-11a.75.75 0 0 1 .75-.75M5 10a.75.75 0 0 1 .75-.75h10.19l-2.72-2.72a.75.75 0 0 1 1.06-1.06l3.997 3.996a.8.8 0 0 1 .156.223a.75.75 0 0 1-.156.845L14.28 14.53a.75.75 0 1 1-1.06-1.06l2.72-2.72H5.75A.75.75 0 0 1 5 10");
}
</style><path class="ltwt3sb5e"/>`,
		"fallback": "fluent:arrow-export-20-filled",
	});
}

export default Component;
