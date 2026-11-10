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
		"content": `<style>.qgoyt9yga {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 23V5.754M19.294 13.176L12 5.754L4.706 13.176M20 2H4");
}
</style><path class="qgoyt9yga"/>`,
		"fallback": "keyline-icons:arrow-up-to-line-sharp",
	});
}

export default Component;
