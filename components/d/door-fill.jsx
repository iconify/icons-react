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
		"content": `<style>.b8d0o2bue {
  fill: currentColor;
  d: path("M5 22L5 4C5 2.8954 5.8954 2 7 2L17 2C18.1046 2 19 2.8954 19 4L19 22L5 22ZM15 11C15 10.4477 14.5523 10 14 10C13.4477 10 13 10.4477 13 11L13 13C13 13.5523 13.4477 14 14 14C14.5523 14 15 13.5523 15 13L15 11Z");
  stroke: none;
}

.jpo7_pb2a {
  d: path("M2 21L22 21");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="b8d0o2bue"/><path class="jpo7_pb2a"/></g>`,
		"fallback": "keyline-icons:door-fill",
	});
}

export default Component;
