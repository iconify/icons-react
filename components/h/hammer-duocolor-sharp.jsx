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
		"content": `<style>.gqp1rr3ox {
  d: path("m9 3l1 1c1.28 1.28 2 2.72 2 4v2l2 2h2l2 2l3-3l-2-2V7l-2-2c-1.28-1.28-2.72-2-4-2z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xc70yzw7w {
  stroke-opacity: 0.4;
  d: path("m15 12l-8 8a2.121 2.121 0 1 1-3-3l8-8");
}
</style><g class="nrj6p8qat"><path class="xc70yzw7w"/><path class="gqp1rr3ox"/></g>`,
		"fallback": "coolicons:hammer-duocolor-sharp",
	});
}

export default Component;
