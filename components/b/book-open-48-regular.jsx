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
		"content": `<style>.vtlxtkb7j {
  fill: currentColor;
  d: path("M20 8c1.602 0 3.037.718 4 1.85A5.24 5.24 0 0 1 28 8h13.25A2.75 2.75 0 0 1 44 10.75v26.5A2.75 2.75 0 0 1 41.25 40H28a5.24 5.24 0 0 1-4-1.85A5.24 5.24 0 0 1 20 40H6.75A2.75 2.75 0 0 1 4 37.25v-26.5A2.75 2.75 0 0 1 6.75 8zm2.75 26.75v-21.5A2.75 2.75 0 0 0 20 10.5H6.75a.25.25 0 0 0-.25.25v26.5c0 .138.112.25.25.25H20a2.75 2.75 0 0 0 2.75-2.75m2.5-21.5v21.5A2.75 2.75 0 0 0 28 37.5h13.25a.25.25 0 0 0 .25-.25v-26.5a.25.25 0 0 0-.25-.25H28a2.75 2.75 0 0 0-2.75 2.75");
}
</style><path class="vtlxtkb7j"/>`,
		"fallback": "fluent:book-open-48-regular",
	});
}

export default Component;
