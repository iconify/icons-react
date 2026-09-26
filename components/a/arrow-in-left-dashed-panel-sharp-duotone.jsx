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

.kk2ahrb3x {
  stroke-opacity: 0.4;
  d: path("M3 7L3 3L7 3M9.5 3L14.5 3M21 8L21 3.0001L17 3M8 21L3 21L3 17M3 9.5L3 14.5");
}

.n25s7kbvy {
  d: path("M22 15.5L10.4751 15.5M16.3094 9.7045L10.24 15.5L16.2898 21.2768");
}
</style><g class="gp_8x1bzb"><path class="kk2ahrb3x"/><path class="n25s7kbvy"/></g>`,
		"fallback": "keyline-icons:arrow-in-left-dashed-panel-sharp-duotone",
	});
}

export default Component;
