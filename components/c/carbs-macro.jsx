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
		"content": `<style>.j5-0x5bjv {
  d: path("M7.75 14a1.5 2.25 0 1 0 3 0a1.5 2.25 0 1 0-3 0Zm5.5 0a1.5 2.25 0 1 0 3 0a1.5 2.25 0 1 0-3 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vjgtoyj8s {
  d: path("M12 21.5V6m-1.5-1.5a1.5 2.25 0 1 0 3 0a1.5 2.25 0 1 0-3 0Zm-2.75 5a1.5 2.25 0 1 0 3 0a1.5 2.25 0 1 0-3 0Zm5.5 0a1.5 2.25 0 1 0 3 0a1.5 2.25 0 1 0-3 0Z");
}
</style><g class="ulnmmdpxh"><path class="vjgtoyj8s"/><path class="j5-0x5bjv"/></g>`,
		"fallback": "uix-sharp:carbs-macro",
	});
}

export default Component;
