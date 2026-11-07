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
		"content": `<style>.tyv1e0c_n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m4.636 5.636l-1.079.533A1 1 0 0 0 3 7.066v9.868a1 1 0 0 0 .557.897l8 3.95a1 1 0 0 0 .886 0l5.582-2.756M8.423 3.766l3.134-1.547a1 1 0 0 1 .886 0l8 3.95a1 1 0 0 1 .557.897v9.277M3.16 6.523L7.83 8.83M12 13v8.885m2.374-12.168l6.466-3.194M2 3l19 19");
}
</style><path class="tyv1e0c_n"/>`,
		"fallback": "coolicons:box-off",
	});
}

export default Component;
