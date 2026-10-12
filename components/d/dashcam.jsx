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

.iqi9pmbig {
  width: 18.5px;
  height: 11px;
  x: 2.75px;
  y: 7.75px;
  rx: 3px;
}

.lw7mk5b2f {
  width: 5px;
  height: 2.5px;
  x: 9.5px;
  y: 2.75px;
  rx: 0.75px;
}

.ttidu-b1p {
  d: path("M6 11h1.5");
}

.u8b14sodz {
  d: path("M12 5.25v2.5");
}

.z0np8cblh {
  cx: 14.5px;
  cy: 13.25px;
  r: 3px;
}
</style><g class="hntgybcog"><rect class="lw7mk5b2f"/><path class="u8b14sodz"/><rect class="iqi9pmbig"/><circle class="z0np8cblh"/><path class="ttidu-b1p"/></g>`,
		"fallback": "iconoven:dashcam",
	});
}

export default Component;
