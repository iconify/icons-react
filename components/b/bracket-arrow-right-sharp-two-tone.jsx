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
		"content": `<style>.de9-pqbfb {
  stroke-opacity: 0.4;
  d: path("M12.1093 4L2 4L2 20L12.1093 20");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ub5r4dgcc {
  d: path("M21.7586 12L10.1093 12M15.8562 6.204L22 12L15.8562 17.796");
}
</style><g class="gp_8x1bzb"><path class="de9-pqbfb"/><path class="ub5r4dgcc"/></g>`,
		"fallback": "keyline-icons:bracket-arrow-right-sharp-two-tone",
	});
}

export default Component;
