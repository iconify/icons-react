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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tr6fl5zng {
  stroke-opacity: 0.4;
  d: path("M4 15h5v5m0-5l-6 6");
}

.yuu8r1_fu {
  d: path("M14 19h5V5H5v5");
}
</style><g class="nrj6p8qat"><path class="tr6fl5zng"/><path class="yuu8r1_fu"/></g>`,
		"fallback": "coolicons:external-link-alt-duocolor-sharp",
	});
}

export default Component;
