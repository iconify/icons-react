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
		"content": `<style>.c269d1btl {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M13.412 18.926a1.9 1.9 0 0 1-2.824 0l-7.697-8.552a2 2 0 0 1 .073-2.752l2.743-2.743A3 3 0 0 1 7.828 4h8.344a3 3 0 0 1 2.121.879l2.743 2.743a2 2 0 0 1 .073 2.752Z");
}

.ft5dv1b6b {
  fill: none;
}

.ypyxcnbtw {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m16.5 14l-3.831 4.257a.9.9 0 0 1-1.338 0L3.635 9.705A1 1 0 0 1 3.67 8.33l2.743-2.743A2 2 0 0 1 7.828 5h8.344a2 2 0 0 1 1.414.586l2.743 2.743a1 1 0 0 1 .036 1.376zM8 9l2 2");
}
</style><g class="ft5dv1b6b"><path class="c269d1btl"/><path class="ypyxcnbtw"/></g>`,
		"fallback": "coolicons:gem-duotone",
	});
}

export default Component;
