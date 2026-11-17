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
		"content": `<style>.cuibdnegp {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 3h4v4H3Zm7 7l11 4l-5 2l-2 5Z");
}

.ft5dv1b6b {
  fill: none;
}

.lcsuvo4fg {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3h4v4H3Zm7 7l11 4l-5 2l-2 5z");
}
</style><g class="ft5dv1b6b"><path class="cuibdnegp"/><path class="lcsuvo4fg"/></g>`,
		"fallback": "coolicons:cursor-square-duotone-sharp",
	});
}

export default Component;
