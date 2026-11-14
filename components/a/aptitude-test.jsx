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
		"content": `<style>.s3rdzig4g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12a2 2 0 0 1 2-2h2.25a2 2 0 1 1 2 0H11a2 2 0 0 1 2 2v2.5a2 2 0 1 1 0 2V19a2 2 0 0 1-2 2H4.5a2 2 0 0 1-2-2v-2.5a2 2 0 1 0 0-2ZM15 7.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0m3.25-5.25v2m-1.25-2h2.5M18.25 7.5h.01");
}
</style><path class="s3rdzig4g"/>`,
		"fallback": "uix:aptitude-test",
	});
}

export default Component;
