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
		"content": `<style>.k7rrm89pw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 15L20 15C21.1046 15 22 15.8954 22 17L22 19C22 20.1046 21.1046 21 20 21L4 21C2.8954 21 2 20.1046 2 19L2 17C2 15.8954 2.8954 15 4 15ZM4 15C4 10.5817 7.5817 7 12 7C16.4183 7 20 10.5817 20 15M12 7L12 3M9 3L15 3");
}
</style><path class="k7rrm89pw"/>`,
		"fallback": "keyline-icons:concierge-bell",
	});
}

export default Component;
