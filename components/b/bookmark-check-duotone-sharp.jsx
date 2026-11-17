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

.oj5k2ijtj {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M6 4h12v16l-6-4l-6 4Z");
}

.tpcqb6b-i {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 4h6v16l-6-4l-6 4V4zm-3 6l2 2l4-4");
}
</style><g class="ft5dv1b6b"><path class="oj5k2ijtj"/><path class="tpcqb6b-i"/></g>`,
		"fallback": "coolicons:bookmark-check-duotone-sharp",
	});
}

export default Component;
