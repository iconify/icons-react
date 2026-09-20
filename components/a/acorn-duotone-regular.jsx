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
		"content": `<style>.j3wu6pb4g {
  d: path("M6 9a6 6 0 0 0 12 0Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.y0jjn0phn {
  d: path("M7 9a5 5 0 0 0 5 10 5 5 0 0 0 5 -10");
}

.yazo7scbq {
  d: path("M12 3v3");
}

.yirjebbnv {
  fill: currentColor;
  d: path("M6 9a6 6 0 0 0 12 0Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="yirjebbnv"/><path class="j3wu6pb4g"/><path class="y0jjn0phn"/><path class="yazo7scbq"/></g>`,
		"fallback": "iconmind:acorn-duotone-regular",
	});
}

export default Component;
