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

.u7r7g1bwi {
  stroke-opacity: 0.4;
  d: path("M9 10h6m-3-3v6");
}

.wkt6dcbza {
  d: path("M12 4h6v16l-6-4l-6 4V4z");
}
</style><g class="nrj6p8qat"><path class="u7r7g1bwi"/><path class="wkt6dcbza"/></g>`,
		"fallback": "coolicons:bookmark-plus-duocolor-sharp",
	});
}

export default Component;
