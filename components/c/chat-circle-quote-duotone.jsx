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
		"content": `<style>.b_5suczoi {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 16A8.944 8.944 0 0 1 18.325 5.675A8.944 8.944 0 0 1 8 20l-5 1Z");
}

.ft5dv1b6b {
  fill: none;
}

.iwmyoq1ug {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 16a8.944 8.944 0 1 1 4 4l-5 1Zm4-6h2v2l-2 2m6-4h2v2l-2 2");
}
</style><g class="ft5dv1b6b"><path class="b_5suczoi"/><path class="iwmyoq1ug"/></g>`,
		"fallback": "coolicons:chat-circle-quote-duotone",
	});
}

export default Component;
