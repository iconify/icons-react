import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.pgothtb0z {
  fill: currentColor;
  d: path("M92 152v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0m-52 28a12 12 0 0 0-12 12v8a12 12 0 0 0 24 0v-8a12 12 0 0 0-12-12m176.88 27.93l-160-176a12 12 0 1 0-17.76 16.14L108 123.84V200a12 12 0 0 0 24 0v-49.76l16 17.6V200a12 12 0 0 0 24 0v-5.76l27.12 29.83a12 12 0 0 0 17.76-16.14M160 115.74a12 12 0 0 0 12-12V72a12 12 0 0 0-24 0v31.74a12 12 0 0 0 12 12m40 44a12 12 0 0 0 12-12V32a12 12 0 0 0-24 0v115.74a12 12 0 0 0 12 12");
}
</style><path class="pgothtb0z"/>`,
		"fallback": "ph:cell-signal-slash-bold",
	});
}

export default Component;
