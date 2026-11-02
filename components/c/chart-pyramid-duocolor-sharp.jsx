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
		"content": `<style>.ifdryrb5s {
  d: path("m16 11l5 10H3l9-18z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zz-38cczo {
  stroke-opacity: 0.4;
  d: path("M9 9h6m-9 6h12");
}
</style><g class="nrj6p8qat"><path class="zz-38cczo"/><path class="ifdryrb5s"/></g>`,
		"fallback": "coolicons:chart-pyramid-duocolor-sharp",
	});
}

export default Component;
