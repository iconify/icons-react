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

.xfd77sbcc {
  d: path("M13 3H9c-.587 0-1.144.126-1.646.353M5 7v10a4 4 0 0 0 4 4h6a4 4 0 0 0 2.828-1.172M19 15V9m-6-6l6 6m-6-6v4a2 2 0 0 0 2 2h4");
}

.zo-v9hbio {
  stroke-opacity: 0.4;
  d: path("m2 4l18 18");
}
</style><g class="nrj6p8qat"><path class="zo-v9hbio"/><path class="xfd77sbcc"/></g>`,
		"fallback": "coolicons:file-off-duocolor-round",
	});
}

export default Component;
