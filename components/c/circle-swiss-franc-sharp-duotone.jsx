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

.khl3tgb0u {
  d: path("M16.5 6L15.5 6L9.5 6L9.5 18L9.5 19M8.5 10L9.5 10L15 10L16 10M7.5 14L8.5 14L14 14L15 14");
}

.qbcs2xgch {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M12 1C17.9372 1 23 6.0628 23 12C23 17.9372 17.9372 23 12 23C6.0628 23 1 17.9372 1 12C1 6.0628 6.0628 1 12 1Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="qbcs2xgch"/><path class="khl3tgb0u"/></g>`,
		"fallback": "keyline-icons:circle-swiss-franc-sharp-duotone",
	});
}

export default Component;
