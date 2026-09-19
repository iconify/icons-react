import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rx11sibej {
  fill: currentColor;
  d: path("M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75s-.75-.34-.75-.75s.34-.75.75-.75M9.1 17H7v-2.14l5.96-5.96l2.12 2.12zm7.75-7.73l-1.06 1.06l-2.12-2.12l1.06-1.06c.2-.2.51-.2.71 0l1.41 1.41c.2.2.2.51 0 .71");
}
</style><path class="rx11sibej"/>`,
		"fallback": "ic:baseline-note-alt",
	});
}

export default Component;
