import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.h-yw-tpqp {
  fill: currentColor;
  d: path("M2 4a2 2 0 0 1 2-2h12a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2m2-1a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2zm0 7a2 2 0 0 1 2-2h8a2 2 0 1 1 0 4H6a2 2 0 0 1-2-2m2-1a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2zm2 5a2 2 0 1 0 0 4h4a2 2 0 1 0 0-4zm-1 2a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1");
}
</style><path class="h-yw-tpqp"/>`,
		"fallback": "fluent:data-funnel-20-regular",
	});
}

export default Component;
