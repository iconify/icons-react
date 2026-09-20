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
		"content": `<style>.dpwz1b7al {
  fill: currentColor;
  d: path("M1 3.5a.5.5 0 0 1 .5-.5H7a2 2 0 0 1 2 2v4.5h6c1.035 0 2 .741 2 1.8V16h1.5a.5.5 0 0 1 0 1H13c-1.035 0-2-.741-2-1.8v-4.7H5a2 2 0 0 1-2-2V4H1.5a.5.5 0 0 1-.5-.5M4 4v4.5a1 1 0 0 0 1 1h3V5a1 1 0 0 0-1-1zm12 12v-4.7c0-.377-.378-.8-1-.8h-3v4.7c0 .377.378.8 1 .8z");
}
</style><path class="dpwz1b7al"/>`,
		"fallback": "fluent:data-waterfall-20-regular",
	});
}

export default Component;
