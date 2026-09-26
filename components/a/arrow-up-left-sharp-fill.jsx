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
		"content": `<style>.cxd616xaa {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18.2929 18.2929L6.4929 6.4929M6 19L6 6L19 6");
}
</style><path class="cxd616xaa"/>`,
		"fallback": "keyline-icons:arrow-up-left-sharp-fill",
	});
}

export default Component;
