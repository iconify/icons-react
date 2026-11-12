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
		"content": `<style>.eytsn-xrq {
  d: path("M3 3h12v6H9v6H3z");
}

.k-g232bfw {
  stroke-opacity: 0.4;
  d: path("M19 9h2v4m0 4v4h-4m-8-2v2h4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="k-g232bfw"/><path class="eytsn-xrq"/></g>`,
		"fallback": "coolicons:boolean-subtract-duocolor-sharp",
	});
}

export default Component;
