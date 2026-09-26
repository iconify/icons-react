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
		"content": `<style>.k3c2rj_zs {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 19L14 19C16.7614 19 19 16.7614 19 14C19 11.2386 16.7614 9 14 9L5.3753 9M10.2739 4.7809L5 9L10.3753 13.3002");
}
</style><path class="k3c2rj_zs"/>`,
		"fallback": "keyline-icons:arrow-u-turn-left-sharp-fill",
	});
}

export default Component;
