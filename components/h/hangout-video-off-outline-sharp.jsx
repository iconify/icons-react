import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.nfjw8t5mi {
  fill: currentColor;
  d: path("M10.9 8.05H14v3.1zm3.1 3.1L18 8v7.15zm6 6l2 2V4H6.85l2 2H20zM4 4l2 2H4v12h11.15l-2-2H6V8.85L.7 3.5l1.4-1.4l19.8 19.8l-1.4 1.4l-3.35-3.3H2V4zm5.6 8.45");
}
</style><path class="nfjw8t5mi"/>`,
		"fallback": "material-symbols:hangout-video-off-outline-sharp",
	});
}

export default Component;
