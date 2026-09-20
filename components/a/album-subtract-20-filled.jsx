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
		"content": `<style>.g6bmwhgey {
  fill: currentColor;
  d: path("M5.5 9a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9M16 4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-5.6c.384-.75.6-1.6.6-2.5s-.216-1.75-.6-2.5h3.1A1.5 1.5 0 0 0 15 9.5v-1A1.5 1.5 0 0 0 13.5 7h-4A1.5 1.5 0 0 0 8 8.5v.1a5.5 5.5 0 0 0-3-.578V4zM3.5 13a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm10-5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H9.743A5.5 5.5 0 0 0 9 9.257V8.5a.5.5 0 0 1 .5-.5zM4 8.207a5.5 5.5 0 0 0-2 1.05V6a2 2 0 0 1 2-2z");
}
</style><path class="g6bmwhgey"/>`,
		"fallback": "fluent:album-subtract-20-filled",
	});
}

export default Component;
