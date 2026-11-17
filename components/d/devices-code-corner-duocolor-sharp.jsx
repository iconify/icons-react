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

.qpy5vjbdd {
  d: path("M15 3h6v10h-6Zm-4 1H3v12h7");
}

.zxl6wqb0d {
  stroke-opacity: 0.4;
  d: path("m15 17l-2 2l2 2m4-4l2 2l-2 2");
}
</style><g class="nrj6p8qat"><path class="zxl6wqb0d"/><path class="qpy5vjbdd"/></g>`,
		"fallback": "coolicons:devices-code-corner-duocolor-sharp",
	});
}

export default Component;
