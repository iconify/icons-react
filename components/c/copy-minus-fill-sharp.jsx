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
		"content": `<style>.kpvgjegfq {
  fill: currentColor;
  d: path("M6 3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1ZM4 9v11h11a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0m7 0a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2Z");
}
</style><path class="kpvgjegfq"/>`,
		"fallback": "coolicons:copy-minus-fill-sharp",
	});
}

export default Component;
