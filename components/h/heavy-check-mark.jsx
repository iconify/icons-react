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
		"content": `<style>.w9pq_su7e {
  fill: var(--svg-color--405866, #405866);
  d: path("M60.59 11.873a6.58 6.58 0 0 0-9.165 1.621l-25.02 35.732L10 38.02a6.01 6.01 0 0 0-6.787 9.922l21.99 15.02a5.96 5.96 0 0 0 4.682.889a6.58 6.58 0 0 0 4.257-2.708l28.07-40.1a6.59 6.59 0 0 0-1.623-9.173");
}
</style><path class="w9pq_su7e"/>`,
		"fallback": "emojione-v1:heavy-check-mark",
	});
}

export default Component;
