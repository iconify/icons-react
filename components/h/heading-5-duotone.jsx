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

.r6rbcq94k {
  d: path("M21 13H17V16H19C20.1046 16 21 16.8954 21 18C21 19.1046 20.1046 20 19 20C18.2855 20 17.3573 19.6188 17 19");
}

.walbv2b5n {
  stroke-opacity: 0.4;
  d: path("M2 4V20M11 4V20M2 12H11");
}
</style><g class="nrj6p8qat"><path class="walbv2b5n"/><path class="r6rbcq94k"/></g>`,
		"fallback": "keyline-icons:heading-5-duotone",
	});
}

export default Component;
