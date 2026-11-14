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
		"content": `<style>.gsezk9b5a {
  d: path("M12 11za1.5 1.5 0 0 1 1.5 1.5v4A1.5 1.5 0 0 1 12 18a1.5 1.5 0 0 1-1.5-1.5v-4A1.5 1.5 0 0 1 12 11m0 0c0-2-1.25-3.25-3-3.5m3 3.5c0-2 1.25-3.25 3-3.5M12 11V6.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="gsezk9b5a"/></g>`,
		"fallback": "uix:allergen-celery",
	});
}

export default Component;
