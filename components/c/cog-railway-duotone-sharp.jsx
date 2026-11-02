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

.odebl9baa {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M5 7a1 1 0 0 1 1-1h4V4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v9a1 1 0 0 1-.553.894l-12 6A1 1 0 0 1 5 19Z");
}

.z83cb0bkv {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 19V7h5V4h7v9zm0-7h5V9h7m-7-2v2M4 20l16-8M6 19l1 2m3-4l1 2m3-4l1 2m3-4l1 2");
}
</style><g class="ft5dv1b6b"><path class="odebl9baa"/><path class="z83cb0bkv"/></g>`,
		"fallback": "coolicons:cog-railway-duotone-sharp",
	});
}

export default Component;
