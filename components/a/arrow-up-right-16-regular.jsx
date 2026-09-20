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
		"content": `<style>.e1xd5d_zl {
  fill: currentColor;
  d: path("M7.5 3a.5.5 0 0 1 0-1h6a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V3.707L2.854 13.854a.5.5 0 0 1-.708-.708L12.293 3z");
}
</style><path class="e1xd5d_zl"/>`,
		"fallback": "fluent:arrow-up-right-16-regular",
	});
}

export default Component;
