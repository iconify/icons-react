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
		"content": `<style>.f4mfk-4ft {
  d: path("M7.5 9.25a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 1 1 0-2.5m.75 5a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 1 1 0-2.5m6-8.75q.36 2.64 3 3q-2.64.36-3 3q-.36-2.64-3-3q2.64-.36 3-3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.imld018ov {
  d: path("M12 2.75c5.1 0 9.25 3.6 9.25 8c0 2.6-2.1 4.25-4.5 4.25h-2a1.75 1.75 0 0 0-1.25 3c.75.85.25 3.25-1.5 3.25c-5.1 0-9.25-4.15-9.25-9.25S6.9 2.75 12 2.75");
}
</style><g class="hntgybcog"><path class="imld018ov"/><path class="f4mfk-4ft"/></g>`,
		"fallback": "iconoven:ai-designer",
	});
}

export default Component;
