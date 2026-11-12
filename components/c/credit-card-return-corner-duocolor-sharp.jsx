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
		"content": `<style>.hlgqjd29s {
  stroke-opacity: 0.4;
  d: path("M21 13v4h-8m3-3l-3 3l3 3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xy52n6bdp {
  d: path("M21 9V5H3v14h6M3 9h18");
}
</style><g class="nrj6p8qat"><path class="hlgqjd29s"/><path class="xy52n6bdp"/></g>`,
		"fallback": "coolicons:credit-card-return-corner-duocolor-sharp",
	});
}

export default Component;
