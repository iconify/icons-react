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
		"content": `<style>.m0_tsblfm {
  d: path("M7 7h4l3 5h2c.613 0 1.387.774 2 2l3 6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zyqlyotss {
  stroke-opacity: 0.4;
  d: path("M3 4v12a4 4 0 0 0 4 4h14");
}
</style><g class="nrj6p8qat"><path class="zyqlyotss"/><path class="m0_tsblfm"/></g>`,
		"fallback": "coolicons:chart-burndown-duocolor-round",
	});
}

export default Component;
