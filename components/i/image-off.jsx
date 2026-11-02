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
		"content": `<style>.ffe_0ctzo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20 20c-.362.362-.448 1-1 1H5a2 2 0 0 1-2-2V5c0-.552.638-.638 1-1m5-1h10a2 2 0 0 1 2 2v10M3 17l7-7m5-2a1 1 0 1 0 2 0a1 1 0 0 0-2 0M2 2l20 20");
}
</style><path class="ffe_0ctzo"/>`,
		"fallback": "coolicons:image-off",
	});
}

export default Component;
