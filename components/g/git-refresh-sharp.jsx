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
		"content": `<style>.hxc60ek4g {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 22L6 9M18 14L18 6L12 6M12.7929 17.5L21 17.5L21 22M14.7929 15.2071L12.5 17.5L14.7929 19.7929M6 3C7.6569 3 9 4.3431 9 6C9 7.6569 7.6569 9 6 9C4.3431 9 3 7.6569 3 6C3 4.3431 4.3431 3 6 3Z");
}
</style><path class="hxc60ek4g"/>`,
		"fallback": "keyline-icons:git-refresh-sharp",
	});
}

export default Component;
