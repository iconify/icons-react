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
		"content": `<style>.rpr_ejbdy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.81 12.76c-.91-1.22-2.43-1.22-3.19-.16c-1.28.25-3.8 2.89-.76 5.93s5.47 1.52 6.08 0c1.37-.76 1.67-2.28.3-3.34Zm1.22 1.21l6.38-6.38m3.15-3.55l.4.4q.71.71 0 1.42l-1.92 1.93q-.71.71-1.42 0l-.41-.41q-.71-.71 0-1.42l1.93-1.92q.71-.71 1.42 0m-1.54.11l-.91-.91m-.76 2.58l-.91-.91m4.41 1.07l.91.91m-2.58.76l.91.91M6.53 15.04l2.43 2.43");
}
</style><path class="rpr_ejbdy"/>`,
		"fallback": "iconoven:bass-guitar",
	});
}

export default Component;
