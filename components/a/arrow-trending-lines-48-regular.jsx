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
		"content": `<style>.so_n-7bjt {
  fill: currentColor;
  d: path("M8.25 33c.69 0 1.25.56 1.25 1.25v7.5a1.25 1.25 0 1 1-2.5 0v-7.5c0-.69.56-1.25 1.25-1.25m10-7c.69 0 1.25.56 1.25 1.25v14.5a1.25 1.25 0 1 1-2.5 0v-14.5c0-.69.56-1.25 1.25-1.25m10 4c.69 0 1.25.56 1.25 1.25v10.5a1.25 1.25 0 1 1-2.5 0v-10.5c0-.69.56-1.25 1.25-1.25m10-9c.69 0 1.25.56 1.25 1.25v19.5a1.25 1.25 0 1 1-2.5 0v-19.5c0-.69.56-1.25 1.25-1.25m3.5-16c.69 0 1.25.56 1.25 1.25v8.5a1.25 1.25 0 1 1-2.5 0V9.268L28.384 21.384a1.25 1.25 0 0 1-1.768 0L20 14.768L9.134 25.634a1.25 1.25 0 1 1-1.768-1.768l11.75-11.75l.095-.086a1.25 1.25 0 0 1 1.673.086l6.616 6.616L38.732 7.5H33.25a1.25 1.25 0 1 1 0-2.5z");
}
</style><path class="so_n-7bjt"/>`,
		"fallback": "fluent:arrow-trending-lines-48-regular",
	});
}

export default Component;
