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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rb77lkb_u {
  d: path("M3 5v14m8-14v14m-8-7h8");
}

.xb045b7ja {
  stroke-opacity: 0.4;
  d: path("M21 9h-6v4h3a3 3 0 0 1 0 6h-3");
}
</style><g class="nrj6p8qat"><path class="xb045b7ja"/><path class="rb77lkb_u"/></g>`,
		"fallback": "coolicons:heading-5-duocolor-sharp",
	});
}

export default Component;
