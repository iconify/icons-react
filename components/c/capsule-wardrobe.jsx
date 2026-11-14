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
		"content": `<style>.e6l-5sb5j {
  d: path("M17 2.5H4.5q-2 0-2 2v15q0 2 2 2H17Zm-9.5 0v19m9.5-19l4.5 2v15l-4.5 2m-9.5-15H17");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uihrkq4hl {
  d: path("M12.25 6.5v2l-2.5 3h5l-2.5-3");
}
</style><g class="hntgybcog"><path class="e6l-5sb5j"/><path class="uihrkq4hl"/></g>`,
		"fallback": "uix:capsule-wardrobe",
	});
}

export default Component;
