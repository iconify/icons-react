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
		"content": `<style>.c4p3adbxf {
  stroke-opacity: 0.4;
  d: path("M12 8L12 23M20 1L20 23");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.n8f3dyh2u {
  d: path("M4 15L4 23");
}
</style><g class="gp_8x1bzb"><path class="c4p3adbxf"/><path class="n8f3dyh2u"/></g>`,
		"fallback": "keyline-icons:bar-chart-2-sharp-two-tone",
	});
}

export default Component;
