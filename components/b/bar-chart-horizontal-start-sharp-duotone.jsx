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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ta5v13f3f {
  d: path("M1 4L9 4");
}

.uc2kjd4-r {
  stroke-opacity: 0.4;
  d: path("M1 12L23 12M1 20L16 20");
}
</style><g class="gp_8x1bzb"><path class="uc2kjd4-r"/><path class="ta5v13f3f"/></g>`,
		"fallback": "keyline-icons:bar-chart-horizontal-start-sharp-duotone",
	});
}

export default Component;
