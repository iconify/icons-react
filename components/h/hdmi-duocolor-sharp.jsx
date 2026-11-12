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
		"content": `<style>.ctzd7e6ig {
  d: path("M3 7h18v4l-4 6H7l-4-6z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zzutjwbbr {
  stroke-opacity: 0.4;
  d: path("M8 11h8");
}
</style><g class="nrj6p8qat"><path class="zzutjwbbr"/><path class="ctzd7e6ig"/></g>`,
		"fallback": "coolicons:hdmi-duocolor-sharp",
	});
}

export default Component;
