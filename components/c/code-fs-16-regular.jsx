import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.j9e9jd9xv {
  fill: currentColor;
  d: path("M14.25 9H13V7h1.25a.5.5 0 1 0 0-1H13V5a.5.5 0 0 0-1 0v1h-2V5a.5.5 0 0 0-1 0v1H8a.5.5 0 0 0 0 1h1v2H8a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h2v1a.5.5 0 0 0 1 0v-1h1.25a.5.5 0 1 0 0-1M10 9V7h2v2zM6.5 4.5A.5.5 0 0 1 6 5H3v2.5h2.5a.5.5 0 0 1 0 1H3v3a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 .5.5");
}
</style><path class="j9e9jd9xv"/>`,
		"fallback": "fluent:code-fs-16-regular",
	});
}

export default Component;
