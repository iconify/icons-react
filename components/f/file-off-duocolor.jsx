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

.s4l6akbcl {
  d: path("M13 3H7M5 7v12a2 2 0 0 0 2 2h10c.552 0 1.052-.224 1.414-.586M19 15V9m-6-6l6 6m-6-6v4a2 2 0 0 0 2 2h4");
}

.zo-v9hbio {
  stroke-opacity: 0.4;
  d: path("m2 4l18 18");
}
</style><g class="nrj6p8qat"><path class="zo-v9hbio"/><path class="s4l6akbcl"/></g>`,
		"fallback": "coolicons:file-off-duocolor",
	});
}

export default Component;
