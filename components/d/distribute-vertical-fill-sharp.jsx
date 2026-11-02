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
		"content": `<style>.hi3o2g18e {
  fill: currentColor;
  d: path("M21 3a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2ZM5 9a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1Zm16 10a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Z");
}
</style><path class="hi3o2g18e"/>`,
		"fallback": "coolicons:distribute-vertical-fill-sharp",
	});
}

export default Component;
