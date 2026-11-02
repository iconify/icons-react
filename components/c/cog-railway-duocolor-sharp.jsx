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
		"content": `<style>.lfdcifmie {
  d: path("M6 19V7h5V4h7v9zm0-7h5V9h7m-7-2v2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p37-48m8n {
  stroke-opacity: 0.4;
  d: path("m4 20l16-8M6 19l1 2m3-4l1 2m3-4l1 2m3-4l1 2");
}
</style><g class="nrj6p8qat"><path class="p37-48m8n"/><path class="lfdcifmie"/></g>`,
		"fallback": "coolicons:cog-railway-duocolor-sharp",
	});
}

export default Component;
