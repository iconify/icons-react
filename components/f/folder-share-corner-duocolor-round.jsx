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

.qravvf8eg {
  d: path("M12 6h7a2 2 0 0 1 2 2M8 20H7a4 4 0 0 1-4-4V6a2 2 0 0 1 2-2h5l2 2");
}

.t94iyvbtl {
  stroke-opacity: 0.4;
  d: path("M16 14h4v4m0-4l-6 6");
}
</style><g class="nrj6p8qat"><path class="t94iyvbtl"/><path class="qravvf8eg"/></g>`,
		"fallback": "coolicons:folder-share-corner-duocolor-round",
	});
}

export default Component;
