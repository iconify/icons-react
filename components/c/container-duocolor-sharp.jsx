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

.r_8f1kudd {
  stroke-opacity: 0.4;
  d: path("M8 5v14m4-14v14m4-14v14");
}

.r21jxhxfq {
  d: path("M3 5h18v14H3Z");
}
</style><g class="nrj6p8qat"><path class="r_8f1kudd"/><path class="r21jxhxfq"/></g>`,
		"fallback": "coolicons:container-duocolor-sharp",
	});
}

export default Component;
