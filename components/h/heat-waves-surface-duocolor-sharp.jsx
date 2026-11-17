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
		"content": `<style>.i4xqpqbcx {
  d: path("M3 17h18v4H3Z");
}

.iarrgtb_j {
  stroke-opacity: 0.4;
  d: path("M7 13q2.221-2.5 0-5t0-5m5 10q2.221-2.5 0-5t0-5m5 10q2.222-2.5 0-5t0-5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="iarrgtb_j"/><path class="i4xqpqbcx"/></g>`,
		"fallback": "coolicons:heat-waves-surface-duocolor-sharp",
	});
}

export default Component;
