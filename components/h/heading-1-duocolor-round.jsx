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

.p-7j24btn {
  stroke-opacity: 0.4;
  d: path("m17 11l2-2v10");
}

.rb77lkb_u {
  d: path("M3 5v14m8-14v14m-8-7h8");
}
</style><g class="nrj6p8qat"><path class="p-7j24btn"/><path class="rb77lkb_u"/></g>`,
		"fallback": "coolicons:heading-1-duocolor-round",
	});
}

export default Component;
