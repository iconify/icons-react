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
		"content": `<style>.qjq-flwus {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14.0938 15.0519L15 15.1373C19.0571 15.5196 22 16.6567 22 18C22 19.6569 17.5228 21 12 21C6.4772 21 2 19.6569 2 18C2 16.8895 4.011 15.92 7 15.4013L7.829 15.2574M11 3L20 6L11 9L11 3ZM11 3L11 17L11 18");
}
</style><path class="qjq-flwus"/>`,
		"fallback": "keyline-icons:golf-hole-sharp",
	});
}

export default Component;
