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
		"content": `<style>.hzaw6h27o {
  stroke-opacity: 0.4;
  d: path("M3 7L21 7M17 3L21 7L17 11");
}

.ltlsc9bmo {
  d: path("M21 17L3 17M7 21L3 17L7 13");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="hzaw6h27o"/><path class="ltlsc9bmo"/></g>`,
		"fallback": "keyline-icons:arrow-right-left-duotone",
	});
}

export default Component;
