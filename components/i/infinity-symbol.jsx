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
		"content": `<style>.m5k9kkpwo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 12c-2.5-3.5-6-4-7.5-2q-2.25 3 0 6c1.5 2 5 1.5 7.5-4s6-6 7.5-4q2.25 3 0 6c-1.5 2-5 1.5-7.5-2Z");
}
</style><path class="m5k9kkpwo"/>`,
		"fallback": "uix-sharp:infinity-symbol",
	});
}

export default Component;
