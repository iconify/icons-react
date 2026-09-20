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
		"content": `<style>.ydvxkiaxr {
  fill: currentColor;
  d: path("M8.52 15q-.02.248-.02.5c0 .582.072 1.162.273 1.616c.208.47.6.884 1.227.884s1.019-.414 1.227-.884c.2-.454.273-1.034.273-1.616q0-.252-.02-.5zM2.5 5.5v-3A.5.5 0 0 1 3 2h14a.5.5 0 0 1 .5.5v3A1.5 1.5 0 0 1 16 7H4a1.5 1.5 0 0 1-1.5-1.5M4.75 8l2.724 5.447a1 1 0 0 0 .894.553h3.264a1 1 0 0 0 .894-.553L15.25 8z");
}
</style><path class="ydvxkiaxr"/>`,
		"fallback": "fluent:inking-tool-20-filled",
	});
}

export default Component;
