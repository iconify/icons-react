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
		"content": `<style>.daaep74_v {
  stroke-opacity: 0.4;
  d: path("M15 13v8m4-8v8");
}

.hw-h4twqp {
  d: path("M12 6h9v2M8 20H3V4h7l2 2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="daaep74_v"/><path class="hw-h4twqp"/></g>`,
		"fallback": "coolicons:folder-pause-corner-duocolor-sharp",
	});
}

export default Component;
