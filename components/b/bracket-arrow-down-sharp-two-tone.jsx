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

.sl7r712yx {
  d: path("M12 21.7586L12 10.1093M6.204 15.8562L12 22L17.796 15.8562");
}

.xw5t5ib4d {
  stroke-opacity: 0.4;
  d: path("M4 12.1093L4 2L20 2L20 12.1093");
}
</style><g class="gp_8x1bzb"><path class="xw5t5ib4d"/><path class="sl7r712yx"/></g>`,
		"fallback": "keyline-icons:bracket-arrow-down-sharp-two-tone",
	});
}

export default Component;
