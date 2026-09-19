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
		"content": `<style>.x3wdndbhv {
  fill: var(--svg-color--ff5a79, #ff5a79);
  d: path("M62 10.6L53.4 2L32 23.4L10.6 2L2 10.6L23.4 32L2 53.4l8.6 8.6L32 40.6L53.4 62l8.6-8.6L40.6 32z");
}
</style><path class="x3wdndbhv"/>`,
		"fallback": "emojione:cross-mark",
	});
}

export default Component;
