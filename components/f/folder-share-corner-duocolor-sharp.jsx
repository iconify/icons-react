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
		"content": `<style>.hw-h4twqp {
  d: path("M12 6h9v2M8 20H3V4h7l2 2");
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
</style><g class="nrj6p8qat"><path class="t94iyvbtl"/><path class="hw-h4twqp"/></g>`,
		"fallback": "coolicons:folder-share-corner-duocolor-sharp",
	});
}

export default Component;
