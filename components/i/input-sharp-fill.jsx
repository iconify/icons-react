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
		"content": `<style>.ftsn9c5og {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2 6L22 6C22.5523 6 23 6.4477 23 7L23 17C23 17.5523 22.5523 18 22 18L2 18C1.4477 18 1 17.5523 1 17L1 7C1 6.4477 1.4477 6 2 6ZM7 10L5 10L5 14L7 14L7 10Z");
}
</style><path clip-rule="evenodd" class="ftsn9c5og"/>`,
		"fallback": "keyline-icons:input-sharp-fill",
	});
}

export default Component;
