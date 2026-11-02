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
		"content": `<style>.ry9yzu4ev {
  fill: currentColor;
  d: path("m9.414 8l8.293 8.293a.999.999 0 1 1-1.414 1.414L8 9.414V14a1 1 0 0 1-2 0V7a1 1 0 0 1 1-1h7a1 1 0 0 1 0 2Z");
}
</style><path class="ry9yzu4ev"/>`,
		"fallback": "coolicons:arrow-up-left-fill-sharp",
	});
}

export default Component;
