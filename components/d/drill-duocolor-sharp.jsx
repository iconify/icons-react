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
		"content": `<style>.g8e6obb6c {
  d: path("M3 4h12v6H3Zm4 6v6m4-6v6m-6 0h8v4H5Z");
}

.n46n-xqfe {
  stroke-opacity: 0.4;
  d: path("M15 5h3v4h-3m3-2h3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="n46n-xqfe"/><path class="g8e6obb6c"/></g>`,
		"fallback": "coolicons:drill-duocolor-sharp",
	});
}

export default Component;
