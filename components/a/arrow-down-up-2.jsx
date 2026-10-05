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
		"content": `<style>.vs70tmgcm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 2L7 12.2604M12 8.1053L7.3241 12.8633C7.1451 13.0456 6.8549 13.0456 6.6759 12.8633L2 8.1053M17 22L17 11.7396M12 15.8947L16.6759 11.1367C16.8549 10.9544 17.1451 10.9544 17.3241 11.1367L22 15.8947");
}
</style><path class="vs70tmgcm"/>`,
		"fallback": "keyline-icons:arrow-down-up-2",
	});
}

export default Component;
