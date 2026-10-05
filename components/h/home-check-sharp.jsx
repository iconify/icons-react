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
		"content": `<style>.glkx8bbji {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12.3859 5.0748L11 3.9963L2 11L2 22L20 22L20 11M8 22L8 15L14 15L14 22M15.7055 5.2971L18.3333 8L22.1371 1.5054");
}
</style><path class="glkx8bbji"/>`,
		"fallback": "keyline-icons:home-check-sharp",
	});
}

export default Component;
