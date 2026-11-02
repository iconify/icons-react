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
		"content": `<style>.jtk93b_xn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 19H5a2 2 0 0 1-2-2v-4l3-6c.613-1.226 1.387-2 2-2h8c.613 0 1.387.774 2 2l3 6v4a2 2 0 0 1-2 2zm-9-6h18M7 16h.01M11 16h.01");
}
</style><path class="jtk93b_xn"/>`,
		"fallback": "coolicons:hard-drive",
	});
}

export default Component;
