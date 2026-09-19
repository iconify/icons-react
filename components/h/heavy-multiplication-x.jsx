import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.c0t14sbry {
  fill: var(--svg-color--4d5357, #4d5357);
  d: path("M62 10.6L53.4 2L32 23.4L10.6 2L2 10.6L23.4 32L2 53.4l8.6 8.6L32 40.6L53.4 62l8.6-8.6L40.6 32z");
}
</style><path class="c0t14sbry"/>`,
		"fallback": "emojione:heavy-multiplication-x",
	});
}

export default Component;
