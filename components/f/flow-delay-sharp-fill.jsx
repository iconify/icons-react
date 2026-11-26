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
		"content": `<style>.ago5x48nd {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M1 12L1 5C1 4.4477 1.4477 4 2 4L15 4C19.4183 4 23 7.5817 23 12C23 16.4183 19.4183 20 15 20L2 20C1.4477 20 1 19.5523 1 19Z");
}
</style><path clip-rule="evenodd" class="ago5x48nd"/>`,
		"fallback": "keyline-icons:flow-delay-sharp-fill",
	});
}

export default Component;
