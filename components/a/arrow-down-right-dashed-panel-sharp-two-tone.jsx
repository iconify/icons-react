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
		"content": `<style>.dvq70_btq {
  d: path("M10.5 21L21 21L21 10.5M11.2071 11.2071L20.8536 20.8536");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.kk2ahrb3x {
  stroke-opacity: 0.4;
  d: path("M3 7L3 3L7 3M9.5 3L14.5 3M21 8L21 3.0001L17 3M8 21L3 21L3 17M3 9.5L3 14.5");
}
</style><g class="gp_8x1bzb"><path class="kk2ahrb3x"/><path class="dvq70_btq"/></g>`,
		"fallback": "keyline-icons:arrow-down-right-dashed-panel-sharp-two-tone",
	});
}

export default Component;
