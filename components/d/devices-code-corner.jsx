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
		"content": `<style>.pjjvg73sd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2Zm-4-1H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5m5 1l-2 2l2 2m4-4l2 2l-2 2");
}
</style><path class="pjjvg73sd"/>`,
		"fallback": "coolicons:devices-code-corner",
	});
}

export default Component;
