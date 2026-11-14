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
		"content": `<style>.isb2bnpgq {
  d: path("M2.5 21.5h10c1.5 0 2.5-.5 3.5-1.25l4.5-3.5a1.5 1.5 0 0 0-2.25-2L16.5 16M12 6l1-2.5");
}

.lg9o22bqp {
  d: path("M12 6c-2-1.5-5-1-5 2.5c0 3 2.5 4.5 5 4c2.5.5 5-1 5-4c0-3.5-3-4-5-2.5Zm-9.5 8.25h3c1.75 0 3.25 1.5 5 1.5H13a1.5 1.5 0 0 1 0 3H9.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lg9o22bqp"/><path class="isb2bnpgq"/></g>`,
		"fallback": "uix-sharp:food-rescue",
	});
}

export default Component;
