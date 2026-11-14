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
		"content": `<style>.dqef58bex {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.528 5.734l6.517 11.662A1.75 1.75 0 0 1 18.517 20H5.483a1.75 1.75 0 0 1-1.528-2.604l6.517-11.662a1.75 1.75 0 0 1 3.056 0M12 9.5v4.25m0 3h.01");
}
</style><path class="dqef58bex"/>`,
		"fallback": "uix:alert-triangle",
	});
}

export default Component;
