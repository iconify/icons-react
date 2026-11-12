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
		"content": `<style>.d_hcm7xrk {
  d: path("M17 7L15 9");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n04922jxw {
  d: path("M19 5L20 4");
}

.uac092bgj {
  cx: 9.5px;
  cy: 14.5px;
  r: 7.5px;
}

.wlfsgdzfw {
  d: path("M16 3.5L16.5 4.5");
}

.zsnush0dj {
  d: path("M19.5 7.5L20.5 8");
}
</style><g class="ipq1z-bjh"><circle class="uac092bgj"/><path class="d_hcm7xrk"/><path class="zsnush0dj"/><path class="wlfsgdzfw"/><path class="n04922jxw"/></g>`,
		"fallback": "solar:bomb-minimalistic-line-duotone",
	});
}

export default Component;
