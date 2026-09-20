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
		"content": `<style>.gy6v9ubje {
  fill: currentColor;
  d: path("M10 3a7 7 0 1 1 0 14a7 7 0 0 1 0-14m8 7a8 8 0 1 0-16 0a8 8 0 0 0 16 0m-8-2.5A2.5 2.5 0 0 1 12.292 9H11.5a.5.5 0 1 0 0 1h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v.696a3.498 3.498 0 0 0-5.609-.53a.5.5 0 0 0 .746.667A2.5 2.5 0 0 1 10 7.5m-3 4.304v.696a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-.792a2.5 2.5 0 0 0 4.156.666a.5.5 0 0 1 .745.668A3.498 3.498 0 0 1 7 11.804");
}
</style><path class="gy6v9ubje"/>`,
		"fallback": "fluent:arrow-sync-circle-20-regular",
	});
}

export default Component;
