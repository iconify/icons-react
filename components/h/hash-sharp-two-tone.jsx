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
		"content": `<style>.dsjxj3b2o {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 8.5L22 8.5M2 15.5L22 15.5M7.4012 21.8896L9.5988 2.1104M14.4012 21.8896L16.5988 2.1104");
}
</style><path class="dsjxj3b2o"/>`,
		"fallback": "keyline-icons:hash-sharp-two-tone",
	});
}

export default Component;
