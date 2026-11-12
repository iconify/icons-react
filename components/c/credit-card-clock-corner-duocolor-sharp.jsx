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

.wx9p5uqgi {
  stroke-opacity: 0.4;
  d: path("M12 17a5 5 0 1 0 10 0a5 5 0 0 0-10 0m5-2v2h2");
}

.xy52n6bdp {
  d: path("M21 9V5H3v14h6M3 9h18");
}
</style><g class="nrj6p8qat"><path class="wx9p5uqgi"/><path class="xy52n6bdp"/></g>`,
		"fallback": "coolicons:credit-card-clock-corner-duocolor-sharp",
	});
}

export default Component;
