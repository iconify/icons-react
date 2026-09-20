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
		"content": `<style>.p74rwel9n {
  fill: currentColor;
  d: path("M2 7.5A4.5 4.5 0 0 1 6.5 3h19A4.5 4.5 0 0 1 30 7.5v12a4.5 4.5 0 0 1-4.5 4.5h-7.617l-6.623 5.615c-1.286 1.09-3.26.177-3.26-1.51V24H6.5A4.5 4.5 0 0 1 2 19.5zM6.5 4A3.5 3.5 0 0 0 3 7.5v12A3.5 3.5 0 0 0 6.5 23h2a.5.5 0 0 1 .5.5v4.605a.98.98 0 0 0 1.614.747l6.763-5.733A.5.5 0 0 1 17.7 23h7.8a3.5 3.5 0 0 0 3.5-3.5v-12A3.5 3.5 0 0 0 25.5 4z");
}
</style><path class="p74rwel9n"/>`,
		"fallback": "fluent:comment-32-light",
	});
}

export default Component;
