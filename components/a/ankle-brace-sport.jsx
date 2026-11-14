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
		"content": `<style>.l5i2d9gdw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.125 3h1.75A2.625 2.625 0 0 1 11.5 5.625v5.572a2.625 2.625 0 0 0 1.683 2.45L17.48 15.3a2.6 2.6 0 0 1 .914.594l.356.356a2.56 2.56 0 0 1 .75 1.811v.689a1.75 1.75 0 0 1-1.75 1.75H7.125A2.625 2.625 0 0 1 4.5 17.875V5.625A2.625 2.625 0 0 1 7.125 3M4.5 8l7 5m0-5l-7 5");
}
</style><path class="l5i2d9gdw"/>`,
		"fallback": "uix:ankle-brace-sport",
	});
}

export default Component;
