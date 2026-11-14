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
		"content": `<style>.lqlvtpa7j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.375 3h3.25a2.625 2.625 0 0 1 2.625 2.625v1.5a2.625 2.625 0 0 1-2.625 2.625h-3.25A2.625 2.625 0 0 1 7.75 7.125v-1.5A2.625 2.625 0 0 1 10.375 3m-5.25 9.5h2.75a2.625 2.625 0 0 1 2.625 2.625v3.25A2.625 2.625 0 0 1 7.875 21h-2.75A2.625 2.625 0 0 1 2.5 18.375v-3.25A2.625 2.625 0 0 1 5.125 12.5m11 0h2.75a2.625 2.625 0 0 1 2.625 2.625v3.25A2.625 2.625 0 0 1 18.875 21h-2.75a2.625 2.625 0 0 1-2.625-2.625v-3.25a2.625 2.625 0 0 1 2.625-2.625M12 3v3m-5.5 6.5v3m11-3v3");
}
</style><path class="lqlvtpa7j"/>`,
		"fallback": "uix:batch-production",
	});
}

export default Component;
