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
		"content": `<style>.r85u4m2no {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M1.93 18.63L7.002 6L12.074 18.63M4.19 13H9.813M15.945 18.67L19.002 10L22.059 18.67M16.886 16H21.118");
}
</style><path class="r85u4m2no"/>`,
		"fallback": "keyline-icons:case-upper-sharp-fill",
	});
}

export default Component;
