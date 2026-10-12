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

.lpd--ub5y {
  d: path("m13.34 12.84l-3.18-3.18q-.88-.88-1.77 0l-2.11 2.12q-.89.88-.01 1.76l3.19 3.19q.88.88 1.76-.01l2.12-2.11q.88-.89 0-1.77M11 20.25h9.25");
}

.yla1m8bvl {
  d: path("m18.65 7.54l-3.19-3.19q-.88-.88-1.76 0L10.16 7.9q-.88.88 0 1.76l3.18 3.18q.88.88 1.76 0l3.55-3.54q.88-.88 0-1.76");
}
</style><g class="hntgybcog"><path class="yla1m8bvl"/><path class="lpd--ub5y"/></g>`,
		"fallback": "iconoven:eraser-tool",
	});
}

export default Component;
