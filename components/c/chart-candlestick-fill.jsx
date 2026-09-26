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
		"content": `<style>.d74yqobky {
  d: path("M3 3L3 19C3 20.1046 3.8954 21 5 21L21 21M9 3L9 5M9 10L9 13M17 6L17 9M17 15L17 17");
}

.ml-hxubcc {
  fill: currentColor;
  d: path("M8 4L10 4C11.1046 4 12 4.8954 12 6L12 9C12 10.1046 11.1046 11 10 11L8 11C6.8954 11 6 10.1046 6 9L6 6C6 4.8954 6.8954 4 8 4ZM16 8L18 8C19.1046 8 20 8.8954 20 10L20 14C20 15.1046 19.1046 16 18 16L16 16C14.8954 16 14 15.1046 14 14L14 10C14 8.8954 14.8954 8 16 8Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="ml-hxubcc"/><path class="d74yqobky"/></g>`,
		"fallback": "keyline-icons:chart-candlestick-fill",
	});
}

export default Component;
