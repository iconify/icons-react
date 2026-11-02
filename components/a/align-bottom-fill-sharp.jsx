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
		"content": `<style>.b_u9vu4oq {
  fill: currentColor;
  d: path("M3 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm10 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1Zm8 11a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Z");
}
</style><path class="b_u9vu4oq"/>`,
		"fallback": "coolicons:align-bottom-fill-sharp",
	});
}

export default Component;
