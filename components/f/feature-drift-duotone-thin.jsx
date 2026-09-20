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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mpjdm200q {
  d: path("M6 4v16");
}

.qrn866ncb {
  d: path("m10 9 3 3 3 -3 3 3");
}

.x3nc7ebxq {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m10 9 3 3 3 -3 3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ydrfk9w6p {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="ydrfk9w6p"/><path class="x3nc7ebxq"/><path class="mpjdm200q"/><path class="qrn866ncb"/></g>`,
		"fallback": "iconmind:feature-drift-duotone-thin",
	});
}

export default Component;
