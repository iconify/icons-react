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
		"content": `<style>.lubw9yzay {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 11L7 21.2604M12 17.1053L7.3241 21.8633C7.1451 22.0456 6.8549 22.0456 6.6759 21.8633L2 17.1053M17 13L17 2.7396M12 6.8947L16.6759 2.1367C16.8549 1.9544 17.1451 1.9544 17.3241 2.1367L22 6.8947");
}
</style><path class="lubw9yzay"/>`,
		"fallback": "keyline-icons:arrow-down-up-3-fill",
	});
}

export default Component;
