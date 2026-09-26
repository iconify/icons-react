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
		"content": `<style>.qakgb95pa {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 14C5.2311 14.6566 6.6048 15 8 15C9.3952 15 10.7689 14.6566 12 14C13.2311 13.3434 14.6048 13 16 13C17.3952 13 18.7689 13.3434 20 14L20 3C18.7689 2.3434 17.3952 2 16 2C14.6048 2 13.2311 2.3434 12 3C10.7689 3.6566 9.3952 4 8 4C6.6048 4 5.2311 3.6566 4 3L4 23");
}
</style><path class="qakgb95pa"/>`,
		"fallback": "keyline-icons:flag-sharp",
	});
}

export default Component;
