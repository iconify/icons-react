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

.rs9vlc3gn {
  d: path("M12 20.5001L13 16.5001L11 14.5001L14 11.0001L10.5 8.5001L12 5.50073");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.s8ozf6mmj {
  d: path("M8.96173 18.9109C6.01943 16.5914 2 14 2 9.1371C2 4.27416 7.50016 0.825464 12 5.50063C16.4998 0.825464 22 4.27416 22 9.1371C22 14 17.9806 16.5914 15.0383 18.9109C14 19.7294 13 20.5 12 20.5C11 20.5 10 19.7294 8.96173 18.9109Z");
}
</style><g class="hntgybcog"><path class="s8ozf6mmj"/><path class="rs9vlc3gn"/></g>`,
		"fallback": "solar:heart-broken-line-duotone",
	});
}

export default Component;
