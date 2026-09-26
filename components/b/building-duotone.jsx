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
		"content": `<style>.b84h-bczg {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M7 1H17C19.20914 1 21 2.79086 21 5V19C21 21.20914 19.20914 23 17 23H7C4.79086 23 3 21.20914 3 19V5C3 2.79086 4.79086 1 7 1Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.nyxz4-pih {
  d: path("M10 22L10 20C10 18.8954 10.8954 18 12 18C13.1046 18 14 18.8954 14 20L14 22M9 6L9 8M15 6L15 8M9 12L9 14M15 12L15 14");
}
</style><g class="nrj6p8qat"><path class="b84h-bczg"/><path class="nyxz4-pih"/></g>`,
		"fallback": "keyline-icons:building-duotone",
	});
}

export default Component;
