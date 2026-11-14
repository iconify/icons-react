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
		"content": `<style>.d09n7tb2o {
  d: path("M12 21.5c-3.9 0-6.5-2.6-6.5-6.25C5.5 11.5 8 9.5 9 6c1.5 1 2.25 2.5 2.25 4.25C12.75 9 13.75 6.75 13.5 3c3.5 2.5 5 7 5 12.25c0 3.65-2.6 6.25-6.5 6.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vavopuw7y {
  d: path("M9.5 16.25a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}
</style><g class="hntgybcog"><path class="d09n7tb2o"/><path class="vavopuw7y"/></g>`,
		"fallback": "uix:burn-rate",
	});
}

export default Component;
