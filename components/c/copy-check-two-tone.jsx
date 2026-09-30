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

.q2zdtccqt {
  d: path("M15.8284 4C15.4046 2.8015 14.2714 2 13 2L5 2C3.34315 2 2 3.34315 2 5L2 13C2 14.2714 2.8015 15.4046 4 15.8284M11 8L19 8C20.65684 8 22 9.34316 22 11L22 19C22 20.65684 20.65684 22 19 22L11 22C9.34316 22 8 20.65684 8 19L8 11C8 9.34316 9.34316 8 11 8ZM12 15L14 17L18 13");
}

.qmhym3b3z {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M11 7L19 7C21.20914 7 23 8.79086 23 11L23 19C23 21.20914 21.20914 23 19 23L11 23C8.79086 23 7 21.20914 7 19L7 11C7 8.79086 8.79086 7 11 7Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="qmhym3b3z"/><path class="q2zdtccqt"/></g>`,
		"fallback": "keyline-icons:copy-check-two-tone",
	});
}

export default Component;
