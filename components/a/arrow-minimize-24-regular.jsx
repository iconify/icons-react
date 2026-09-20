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
		"content": `<style>.wzbpjvb4z {
  fill: currentColor;
  d: path("M10.25 13a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0v-5.69l-6.22 6.22a.75.75 0 1 1-1.06-1.06l6.22-6.22H2.75a.75.75 0 0 1 0-1.5zM20.72 2.22a.75.75 0 1 1 1.06 1.06L15.56 9.5h5.69a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v5.69z");
}
</style><path class="wzbpjvb4z"/>`,
		"fallback": "fluent:arrow-minimize-24-regular",
	});
}

export default Component;
