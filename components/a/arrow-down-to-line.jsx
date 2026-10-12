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
		"content": `<style>.j6ezobbni {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3.75v12M6.75 10.5L12 15.75l5.25-5.25m-12.5 9.75h14.5");
}
</style><path class="j6ezobbni"/>`,
		"fallback": "iconoven:arrow-down-to-line",
	});
}

export default Component;
