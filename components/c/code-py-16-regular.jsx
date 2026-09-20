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
		"content": `<style>.u6z8i6bba {
  fill: currentColor;
  d: path("M5.75 4H3.5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-3h1.75A2.25 2.25 0 0 0 8 6.25A2.25 2.25 0 0 0 5.75 4m0 3.5H4V5h1.75A1.25 1.25 0 0 1 7 6.25A1.25 1.25 0 0 1 5.75 7.5m8.657-2.71L12 8.16v3.34a.5.5 0 0 1-1 0V8.16L8.593 4.79a.5.5 0 0 1 .294-.78a.5.5 0 0 1 .522.197L11.5 7.14l2.093-2.931a.5.5 0 1 1 .814.582");
}
</style><path class="u6z8i6bba"/>`,
		"fallback": "fluent:code-py-16-regular",
	});
}

export default Component;
