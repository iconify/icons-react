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
		"content": `<style>.qv67yeehl {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 7L21 7L21 17L11 17ZM2 3L22 3M2 21L22 21M2 9L8 9M2 15L8 15");
}
</style><path class="qv67yeehl"/>`,
		"fallback": "keyline-icons:image-wrap-right-sharp",
	});
}

export default Component;
