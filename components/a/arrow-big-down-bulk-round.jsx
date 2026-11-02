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
		"content": `<style>.vv93zobeb {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M11 3h2a3 3 0 0 1 3 3v4a.997.997 0 0 0 1 1h1c.898 0 1.928.572 2.089 1.521a1.34 1.34 0 0 1-.382 1.186l-6 6a2.414 2.414 0 0 1-3.414 0l-6-6a1.36 1.36 0 0 1-.382-1.186C4.072 11.572 5.102 11 6 11h1a.997.997 0 0 0 1-1V6a3 3 0 0 1 3-3");
}
</style><path class="vv93zobeb"/>`,
		"fallback": "coolicons:arrow-big-down-bulk-round",
	});
}

export default Component;
