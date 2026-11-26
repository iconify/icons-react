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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r5rqf9usu {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16Z");
  stroke: none;
}

.t244b72em {
  d: path("M12 2L22 12L12 22L2 12L12 2ZM12 7L12 13");
}
</style><g class="gp_8x1bzb"><path class="t244b72em"/><path clip-rule="evenodd" class="r5rqf9usu"/></g>`,
		"fallback": "keyline-icons:diamond-alert-sharp",
	});
}

export default Component;
