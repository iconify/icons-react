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
		"content": `<style>.bdn_pkbdy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 18a2 2 0 0 1 2-2h8a2 2 0 1 1 0 4H5a2 2 0 0 1-2-2m3-2V8h3l4 4v4m-7-4h6m1 1l3-8l5 5v5h-2l-1-2");
}
</style><path class="bdn_pkbdy"/>`,
		"fallback": "coolicons:excavator-sharp",
	});
}

export default Component;
