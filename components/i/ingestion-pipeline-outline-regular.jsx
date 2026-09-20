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
		"content": `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.e0fatccfd {
  d: path("M18 12h4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.x909-s8qx {
  d: path("m20 10 2 2 -2 2");
}
</style><g class="nrj6p8qat"><path class="abnm6smsv"/><path class="e0fatccfd"/><path class="x909-s8qx"/></g>`,
		"fallback": "iconmind:ingestion-pipeline-outline-regular",
	});
}

export default Component;
