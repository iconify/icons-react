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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z0ulvsbnb {
  d: path("M9.75 7.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M8.5 15c0-2 1.5-2.5 3.5-2.5s3.5.5 3.5 2.5Z");
}

.z9oludb8t {
  d: path("M12 21.5c-3-3-8-7-8-11.5a8 8 0 0 1 16 0c0 4.5-5 8.5-8 11.5");
}
</style><g class="hntgybcog"><path class="z9oludb8t"/><path class="z0ulvsbnb"/></g>`,
		"fallback": "uix:child-location",
	});
}

export default Component;
