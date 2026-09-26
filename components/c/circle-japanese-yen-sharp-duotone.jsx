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

.qbcs2xgch {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M12 1C17.9372 1 23 6.0628 23 12C23 17.9372 17.9372 23 12 23C6.0628 23 1 17.9372 1 12C1 6.0628 6.0628 1 12 1Z");
  stroke: none;
}

.xfjt8jbfm {
  d: path("M8.2526 5.7172L8.5 6L12 10L15.5 6L15.7474 5.7172M12 9L12 10L12 18L12 19M7.5 13L8.5 13L15.5 13L16.5 13M7.5 16L8.5 16L15.5 16L16.5 16");
}
</style><g class="gp_8x1bzb"><path class="qbcs2xgch"/><path class="xfjt8jbfm"/></g>`,
		"fallback": "keyline-icons:circle-japanese-yen-sharp-duotone",
	});
}

export default Component;
