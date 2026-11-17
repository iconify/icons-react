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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.gb-u8rbpy {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M12 15h2l2 6l-4-2l-4 2l2-6za6 6 0 1 1 0-12a6 6 0 0 1 0 12");
}

.rq-27focr {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 9a6 6 0 1 0 12 0A6 6 0 0 0 6 9m8 6l2 6l-4-2l-4 2l2-6");
}
</style><g class="ft5dv1b6b"><path class="gb-u8rbpy"/><path class="rq-27focr"/></g>`,
		"fallback": "coolicons:award-duotone",
	});
}

export default Component;
