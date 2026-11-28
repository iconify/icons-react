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

.lte7ij6pb {
  d: path("M19 15V23M15 19H23");
}

.r07wp5bhq {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M13 14.18V22C13 22.552 12.552 23 12 23C5.925 23 1 18.075 1 12C1 5.925 5.925 1 12 1C18.075 1 23 5.925 23 12C23 12.552 22.552 13 22 13H14.049L17.549 9.061L15.905 7.601L10.533 13.644L8.093 10.901L6.45 12.362L9.786 16.114C10.183 16.562 10.883 16.562 11.281 16.115L13 14.18Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path clip-rule="evenodd" class="r07wp5bhq"/><path class="lte7ij6pb"/></g>`,
		"fallback": "keyline-icons:circle-check-plus-sharp-fill",
	});
}

export default Component;
