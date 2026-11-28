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
		"content": `<style>.xzae09l_i {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18.6025 6.6133L22 12.1534L22 20L2 20L2 12.1534L5.3975 6.6133M2 13L8 13L10 16L14 16L16 13L22 13M12 3L12 11M8.7071 7.7071L12 11L15.2929 7.7071");
}
</style><path class="xzae09l_i"/>`,
		"fallback": "keyline-icons:inbox-arrow-down-sharp",
	});
}

export default Component;
