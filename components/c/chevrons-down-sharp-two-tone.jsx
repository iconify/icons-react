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

.qc-yth18w {
  stroke-opacity: 0.4;
  d: path("M6.7071 5.7071L12 11L17.2929 5.7071");
}

.ug019ubuu {
  d: path("M6.7071 12.7071L12 18L17.2929 12.7071");
}
</style><g class="gp_8x1bzb"><path class="qc-yth18w"/><path class="ug019ubuu"/></g>`,
		"fallback": "keyline-icons:chevrons-down-sharp-two-tone",
	});
}

export default Component;
