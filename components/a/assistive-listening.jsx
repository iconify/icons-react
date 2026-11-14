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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jnzihrbis {
  d: path("M12.25 9a2.75 2.75 0 0 1 5.5 0c0 1.25-1 1.75-2 2.5m-9.915 2.75a2.5 2.5 0 0 1 0-2.5m-1.931 4.118a5 5 0 0 1 0-5.736");
}

.kfs834xzy {
  d: path("M9.5 9a5.5 5.5 0 0 1 11 0c0 3-2.25 4.25-3 6.25c-.6 1.75-1.75 4.25-4.25 4.25c-1.75 0-3-1-3.5-2.25");
}
</style><g class="hntgybcog"><path class="kfs834xzy"/><path class="jnzihrbis"/></g>`,
		"fallback": "uix:assistive-listening",
	});
}

export default Component;
