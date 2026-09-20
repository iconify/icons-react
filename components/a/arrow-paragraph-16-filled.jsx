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
		"content": `<style>.ar6gdyb0u {
  fill: currentColor;
  d: path("M13.25 2a.75.75 0 0 0-.75.75v2a.75.75 0 0 1-.75.75H9.56l.72-.72a.75.75 0 1 0-1.06-1.06l-2 2a.75.75 0 0 0 0 1.06l2 2a.75.75 0 1 0 1.06-1.06L9.56 7h2.19A2.25 2.25 0 0 0 14 4.75v-2a.75.75 0 0 0-.75-.75M5.72 8.22a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06-1.06l.72-.72H1.75a.75.75 0 0 1 0-1.5h4.69l-.72-.72a.75.75 0 0 1 0-1.06");
}
</style><path class="ar6gdyb0u"/>`,
		"fallback": "fluent:arrow-paragraph-16-filled",
	});
}

export default Component;
