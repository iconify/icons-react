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
		"content": `<style>.qieocbg4v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 21.25h5.5l-.05-.5l-.9-9.75l-.05-.5h-4l-.05.5l-.9 9.75l-.05.5zm1-10.75v-5h3v5ZM6 10.5h6.5M9.25 2.75V5.5m4.97-.85l1.152 1.85l-1.152 1.85m2.75-5.43a6.75 6.75 0 0 1 0 7.16");
}
</style><path class="qieocbg4v"/>`,
		"fallback": "iconoven:adhan-speaker-sharp",
	});
}

export default Component;
