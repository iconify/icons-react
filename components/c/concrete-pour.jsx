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
		"content": `<style>.isw25bqat {
  d: path("M12.75 6.5C16 8 17 11 17 15.5h-3.25c0-2-1-4-2.75-4.5ZM2.5 18.5h19v3h-19Z");
}

.qpxulrj8s {
  d: path("m13.486 4.408l-6.92-1.454l-1.71 4.698l6.236 3.334");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qpxulrj8s"/><path class="isw25bqat"/></g>`,
		"fallback": "uix-sharp:concrete-pour",
	});
}

export default Component;
