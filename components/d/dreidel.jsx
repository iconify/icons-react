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
		"content": `<style>.gjsxbh4hp {
  d: path("M9 10v2.25a3 3 0 0 0 6 0V10m-3 0v5.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rvqgat6hy {
  d: path("M12 2.75V7.5m-4.75 0h9.5Q18 7.5 18 8.75V13q0 1.25-.81 2.2l-4.38 5.1q-.81.95-1.62 0l-4.38-5.1Q6 14.25 6 13V8.75Q6 7.5 7.25 7.5");
}
</style><g class="hntgybcog"><path class="rvqgat6hy"/><path class="gjsxbh4hp"/></g>`,
		"fallback": "iconoven:dreidel",
	});
}

export default Component;
