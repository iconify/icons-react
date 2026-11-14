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
		"content": `<style>.owquf41ya {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 17a9.5 9.5 0 0 1 19 0Zm4.75-8.25l1.5 2.5m8-2.5l-1.5 2.5M12 17l.75-6.5M12 17h.01");
}
</style><path class="owquf41ya"/>`,
		"fallback": "uix-sharp:bmi-gauge",
	});
}

export default Component;
