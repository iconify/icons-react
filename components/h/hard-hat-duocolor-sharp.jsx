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
		"content": `<style>.igv9ygb-y {
  stroke-opacity: 0.4;
  d: path("M10 11V4h4v7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.s3lba5b3w {
  d: path("M5 16v-5a5 5 0 0 1 5-5m4 0a5 5 0 0 1 5 5v5M3 16h18v4H3Z");
}
</style><g class="nrj6p8qat"><path class="igv9ygb-y"/><path class="s3lba5b3w"/></g>`,
		"fallback": "coolicons:hard-hat-duocolor-sharp",
	});
}

export default Component;
