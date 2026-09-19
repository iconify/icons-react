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
		"content": `<style>.h748ltbds {
  fill: var(--svg-color--fbb11c, #fbb11c);
  d: path("M32 29L42 1L12 35h20L22 63l30-34");
}
</style><path class="h748ltbds"/>`,
		"fallback": "emojione-v1:high-voltage",
	});
}

export default Component;
