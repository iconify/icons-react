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
		"content": `<style>.ibvz_rbnu {
  stroke-opacity: 0.4;
  d: path("m14 6l2 2l2-2M7 18h10");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oe6q8hr5d {
  d: path("M3 3h18v8H3Zm0 12h18v6H3Zm4-9v2");
}
</style><g class="nrj6p8qat"><path class="ibvz_rbnu"/><path class="oe6q8hr5d"/></g>`,
		"fallback": "coolicons:combobox-duocolor-sharp",
	});
}

export default Component;
