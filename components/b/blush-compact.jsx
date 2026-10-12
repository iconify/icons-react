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
		"content": `<style>.gkmarkbih {
  cx: 12px;
  cy: 15.25px;
  r: 6px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ivnrysbyn {
  cx: 12px;
  cy: 15.25px;
  r: 3.5px;
}

.lv6gjzbhq {
  d: path("M12 2.75a6 2 0 1 1 0 4a6 2 0 1 1 0-4m-2 4v2.5m4-2.5v2.5");
}

.mccm49fzr {
  d: path("M10.25 15.5c.9-1.25 2.6-1.25 3.5 0");
}
</style><g class="hntgybcog"><path class="lv6gjzbhq"/><circle class="gkmarkbih"/><circle class="ivnrysbyn"/><path class="mccm49fzr"/></g>`,
		"fallback": "iconoven:blush-compact",
	});
}

export default Component;
