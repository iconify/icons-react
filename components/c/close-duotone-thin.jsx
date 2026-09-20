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
		"content": `<style>.edg0x3nuq {
  d: path("m5 5 14 14");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kh3dhlbde {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m5 5 14 14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.wvha8hh3o {
  d: path("M19 5 5 19");
}

.zr-n-ubjz {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M19 5 5 19");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="kh3dhlbde"/><path class="zr-n-ubjz"/><path class="edg0x3nuq"/><path class="wvha8hh3o"/></g>`,
		"fallback": "iconmind:close-duotone-thin",
	});
}

export default Component;
