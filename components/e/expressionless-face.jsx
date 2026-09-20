import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gx2airb0v {
  fill: var(--svg-color--2f2f2f, #2f2f2f);
  d: path("M53.13 55.59h-17.9c-1.66 0-3-1.34-3-3s1.34-3 3-3h17.9c1.66 0 3 1.34 3 3s-1.34 3-3 3m39.63 0h-17.9c-1.66 0-3-1.34-3-3s1.34-3 3-3h17.9c1.66 0 3 1.34 3 3s-1.34 3-3 3m-3.07 29.16H38.31c-1.66 0-3-1.34-3-3s1.34-3 3-3H89.7c1.66 0 3 1.34 3 3s-1.35 3-3.01 3");
}

.p1xtd6blu {
  fill: var(--svg-color--fcc21b, #fcc21b);
  d: path("M64 9.9C1.99 9.9.51 79.42.51 93.19c0 13.76 28.43 24.91 63.49 24.91c35.07 0 63.49-11.16 63.49-24.91c0-13.77-1.47-83.29-63.49-83.29");
}
</style><path class="p1xtd6blu"/><path class="gx2airb0v"/>`,
		"fallback": "noto-v1:expressionless-face",
	});
}

export default Component;
