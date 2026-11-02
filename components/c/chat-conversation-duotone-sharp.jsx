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
		"content": `<style>.ddg2szbey {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M15 2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H7.414l-3.707 3.707A1 1 0 0 1 2 17V3a1 1 0 0 1 1-1Z");
}

.ft5dv1b6b {
  fill: none;
}

.g8hgg_1vh {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3h12v10H7l-4 4zm16 6h2v12l-4-4H9");
}
</style><g class="ft5dv1b6b"><path class="ddg2szbey"/><path class="g8hgg_1vh"/></g>`,
		"fallback": "coolicons:chat-conversation-duotone-sharp",
	});
}

export default Component;
