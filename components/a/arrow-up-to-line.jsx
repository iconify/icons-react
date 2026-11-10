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
		"content": `<style>.yhpxa0bhi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 22V6.941M19 12.877L12.4125 6.174C12.1847 5.942 11.8153 5.942 11.5875 6.174L5 12.877M19 2H5");
}
</style><path class="yhpxa0bhi"/>`,
		"fallback": "keyline-icons:arrow-up-to-line",
	});
}

export default Component;
