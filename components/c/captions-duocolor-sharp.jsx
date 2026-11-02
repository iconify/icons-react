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

.r21jxhxfq {
  d: path("M3 5h18v14H3Z");
}

.xcdeapb2u {
  stroke-opacity: 0.4;
  d: path("M7 10h4m4 0h2M7 14h2m4 0h4");
}
</style><g class="nrj6p8qat"><path class="xcdeapb2u"/><path class="r21jxhxfq"/></g>`,
		"fallback": "coolicons:captions-duocolor-sharp",
	});
}

export default Component;
