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
		"content": `<style>.diqvw204z {
  fill: currentColor;
  d: path("M5 23a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1m7-6a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V18a1 1 0 0 1 1-1m7 3a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0v-7a1 1 0 0 1 1-1m7-6a1 1 0 0 1 1 1v13a1 1 0 1 1-2 0V15a1 1 0 0 1 1-1m2.002-11a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.414l-8.293 8.293a1 1 0 0 1-1.414 0l-4.293-4.293l-7.291 7.293a1 1 0 1 1-1.414-1.414l7.998-8c.197-.18.435-.293.707-.293a1 1 0 0 1 .707.293l4.293 4.293L25.588 5h-3.586a1 1 0 1 1 0-2z");
}
</style><path class="diqvw204z"/>`,
		"fallback": "fluent:arrow-trending-lines-32-regular",
	});
}

export default Component;
