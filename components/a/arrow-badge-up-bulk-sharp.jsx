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
		"content": `<style>.v2w1mnb6k {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M20 11v9a1.002 1.002 0 0 1-1.707.707L12 14.414l-6.293 6.293A1 1 0 0 1 4 20v-9c0-.265.105-.52.293-.707l7-7a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 20 11");
}
</style><path class="v2w1mnb6k"/>`,
		"fallback": "coolicons:arrow-badge-up-bulk-sharp",
	});
}

export default Component;
