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
		"content": `<style>.dtj_jpbjl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 8c-1.5-1.5-1.5-3.75 0-5.25c1.5 1.5 1.5 3.75 0 5.25m0 3.5c-.25-2.75-2.25-4-5.25-4c.25 2.75 2.25 4 5.25 4m0 0c.25-2.75 2.25-4 5.25-4c-.25 2.75-2.25 4-5.25 4m0 6c-.75-2.75-3-4.25-6.25-4c.5 3 2.75 4.5 6.25 4m0 0c.75-2.75 3-4.25 6.25-4c-.5 3-2.75 4.5-6.25 4m0 3.75V8");
}
</style><path class="dtj_jpbjl"/>`,
		"fallback": "iconoven:herb",
	});
}

export default Component;
