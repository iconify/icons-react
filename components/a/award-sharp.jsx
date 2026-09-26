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
		"content": `<style>.yd2iq_8mh {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19 9C19 12.866 15.866 16 12 16C8.134 16 5 12.866 5 9C5 5.134 8.134 2 12 2C15.866 2 19 5.134 19 9ZM16.1787 14.6159L19 22L12 19.2077L5 22L7.8213 14.6159");
}
</style><path class="yd2iq_8mh"/>`,
		"fallback": "keyline-icons:award-sharp",
	});
}

export default Component;
