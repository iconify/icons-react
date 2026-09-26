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
		"content": `<style>.bx1pax0sa {
  stroke-opacity: 0.4;
  d: path("M12 9L12 22M20 2L20 22");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vqkc50bpn {
  d: path("M4 16L4 22");
}
</style><g class="nrj6p8qat"><path class="bx1pax0sa"/><path class="vqkc50bpn"/></g>`,
		"fallback": "keyline-icons:bar-chart-2-two-tone",
	});
}

export default Component;
