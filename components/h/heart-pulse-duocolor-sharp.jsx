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
		"content": `<style>.lc0baprsp {
  stroke-opacity: 0.4;
  d: path("M4 12h3l1-3l2 6l1-3h9");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.s262dpztv {
  d: path("M12 7c-2-4-9-4-9 2s9 11 9 11s9-5 9-11s-7-6-9-2");
}
</style><g class="nrj6p8qat"><path class="lc0baprsp"/><path class="s262dpztv"/></g>`,
		"fallback": "coolicons:heart-pulse-duocolor-sharp",
	});
}

export default Component;
