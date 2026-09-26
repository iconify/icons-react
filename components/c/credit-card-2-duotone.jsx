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
		"content": `<style>.drtd24r2m {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M1 7C1 4.7909 2.7909 3 5 3H19C21.2091 3 23 4.7909 23 7V17C23 19.2091 21.2091 21 19 21H5C2.7909 21 1 19.2091 1 17V7Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qjtlzmvoy {
  d: path("M4 15L20 15M14 9.5L17 9.5");
}
</style><g class="nrj6p8qat"><path class="drtd24r2m"/><path class="qjtlzmvoy"/></g>`,
		"fallback": "keyline-icons:credit-card-2-duotone",
	});
}

export default Component;
