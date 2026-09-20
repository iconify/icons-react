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
		"content": `<style>.tvalyqwag {
  fill: currentColor;
  d: path("M5.346 19.5v-7.115h-2v-1h5v1h-2V19.5zm0-10.885V4.5h1v4.116zm4.154 0v-1h2V4.5h1v3.116h2v1zm2 10.885v-8.115h1V19.5zm6.154 0v-3.116h-2v-1h5v1h-2V19.5zm0-6.884V4.5h1v8.116z");
}
</style><path class="tvalyqwag"/>`,
		"fallback": "material-symbols-light:instant-mix-outline",
	});
}

export default Component;
