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
		"content": `<style>.g3w8g4bzd {
  fill: currentColor;
  d: path("M8.5 33a1.5 1.5 0 0 1 1.5 1.5v7a1.5 1.5 0 0 1-3 0v-7A1.5 1.5 0 0 1 8.5 33m10-7a1.5 1.5 0 0 1 1.5 1.5v14a1.5 1.5 0 0 1-3 0v-14a1.5 1.5 0 0 1 1.5-1.5m10 4a1.5 1.5 0 0 1 1.5 1.5v10a1.5 1.5 0 0 1-3 0v-10a1.5 1.5 0 0 1 1.5-1.5m10-9a1.5 1.5 0 0 1 1.5 1.5v19a1.5 1.5 0 0 1-3 0v-19a1.5 1.5 0 0 1 1.5-1.5m3-16A1.5 1.5 0 0 1 43 6.5v8a1.5 1.5 0 0 1-3 0v-4.379l-11.69 11.69a1.5 1.5 0 0 1-2.12 0l-6.44-6.44l-10.19 10.19a1.5 1.5 0 1 1-2.12-2.122l11.25-11.25l.114-.103a1.5 1.5 0 0 1 2.007.104l6.439 6.439L37.879 8H33.5a1.5 1.5 0 0 1 0-3z");
}
</style><path class="g3w8g4bzd"/>`,
		"fallback": "fluent:arrow-trending-lines-48-filled",
	});
}

export default Component;
