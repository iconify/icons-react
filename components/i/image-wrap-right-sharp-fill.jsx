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
		"content": `<style>.dlbbvlb-m {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M16 6L21 6C21.5523 6 22 6.4477 22 7L22 17C22 17.5523 21.5523 18 21 18L11 18C10.4477 18 10 17.5523 10 17L10 7C10 6.4477 10.4477 6 11 6Z");
  stroke: none;
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.j3ukzrb5m {
  d: path("M2 3L22 3M2 21L22 21M2 9L8 9M2 15L8 15");
}
</style><g class="gp_8x1bzb"><path clip-rule="evenodd" class="dlbbvlb-m"/><path class="j3ukzrb5m"/></g>`,
		"fallback": "keyline-icons:image-wrap-right-sharp-fill",
	});
}

export default Component;
