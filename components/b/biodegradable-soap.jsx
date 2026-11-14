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
		"content": `<style>.bbdmrkbtt {
  d: path("M7.875 12.25h5.25a2.625 2.625 0 0 1 2.625 2.625v.25a2.625 2.625 0 0 1-2.625 2.625h-5.25a2.625 2.625 0 0 1-2.625-2.625v-.25a2.625 2.625 0 0 1 2.625-2.625M14 9.5c0-4 2.5-6.5 7-6.5c0 4-3 5.5-7 6.5");
}

.f4l-debpi {
  d: path("M7.75 9.5h5.5a5.25 5.25 0 0 1 5.25 5.25v.5a5.25 5.25 0 0 1-5.25 5.25h-5.5a5.25 5.25 0 0 1-5.25-5.25v-.5A5.25 5.25 0 0 1 7.75 9.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="f4l-debpi"/><path class="bbdmrkbtt"/></g>`,
		"fallback": "uix:biodegradable-soap",
	});
}

export default Component;
