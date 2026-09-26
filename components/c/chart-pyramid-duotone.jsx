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
		"content": `<style>.fpm4c09pq {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M9.3951 3.512L1.3976 17.5119C1.1387 17.9651 1.0025 18.4781 1.0025 19C1.0025 20.6569 2.3457 22 4.0025 22L19.9975 22C21.6543 22 22.9975 20.6569 22.9975 19C22.9975 18.4781 22.8613 17.9651 22.6024 17.5119L14.6049 3.512C14.0709 2.577 13.0767 2 12 2C10.9233 2 9.9291 2.577 9.3951 3.512Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tqdd8nb1e {
  d: path("M7.4117 9L16.5883 9M3.9842 15L20.0158 15");
}
</style><g class="nrj6p8qat"><path class="fpm4c09pq"/><path class="tqdd8nb1e"/></g>`,
		"fallback": "keyline-icons:chart-pyramid-duotone",
	});
}

export default Component;
