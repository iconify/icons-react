import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.eeuvhwjiz {
  fill: currentColor;
  d: path("m38.215 39.983l3.651 3.65a1.25 1.25 0 0 0 1.768-1.767l-37.5-37.5a1.25 1.25 0 1 0-1.768 1.768L7.09 8.857A6.25 6.25 0 0 0 4 14.25v19.5A6.25 6.25 0 0 0 10.25 40h27.5q.235 0 .465-.017M44 33.75a6.23 6.23 0 0 1-1.543 4.112l-4.641-4.642c.117-.213.184-.459.184-.72v-1a1.5 1.5 0 0 0-2.744-.839L12.596 8H37.75A6.25 6.25 0 0 1 44 14.25zM10 15.5a1.5 1.5 0 0 1 3 0v1a1.5 1.5 0 0 1-3 0zM36.5 14a1.5 1.5 0 0 0-1.5 1.5v1a1.5 1.5 0 0 0 3 0v-1a1.5 1.5 0 0 0-1.5-1.5M10 23.5a1.5 1.5 0 0 1 3 0v1a1.5 1.5 0 0 1-3 0zM36.5 22a1.5 1.5 0 0 0-1.5 1.5v1a1.5 1.5 0 0 0 3 0v-1a1.5 1.5 0 0 0-1.5-1.5M10 31.5a1.5 1.5 0 0 1 3 0v1a1.5 1.5 0 0 1-3 0z");
}
</style><path class="eeuvhwjiz"/>`,
		"fallback": "fluent:filmstrip-off-48-filled",
	});
}

export default Component;
