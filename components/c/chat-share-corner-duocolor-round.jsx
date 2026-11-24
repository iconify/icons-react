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
		"content": `<style>.dgu2bqbnk {
  d: path("M9 17c-1.28 0-2.36.36-3 1l-1 1c-.738.738-2-.524-2-2V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t94iyvbtl {
  stroke-opacity: 0.4;
  d: path("M16 14h4v4m0-4l-6 6");
}
</style><g class="nrj6p8qat"><path class="t94iyvbtl"/><path class="dgu2bqbnk"/></g>`,
		"fallback": "coolicons:chat-share-corner-duocolor-round",
	});
}

export default Component;
