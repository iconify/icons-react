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
		"content": `<style>.wjr5f8bym {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14 4.964L17.536 8.5a2.5 2.5 0 0 1 0 3.536a2.5 2.5 0 0 1-3.536 0L10.464 8.5a2.5 2.5 0 0 1 0-3.536a2.5 2.5 0 0 1 3.536 0m-1.75 5.286L4 18.5m10-1h5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5h-5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5");
}
</style><path class="wjr5f8bym"/>`,
		"fallback": "uix:courtroom",
	});
}

export default Component;
