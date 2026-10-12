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
		"content": `<style>.b9b69mpzu {
  d: path("m5.5 11.25l1.6-5.6l.44-1.543l1.51.543L12 5.5l2.95-.85l1.51-.543l.44 1.543l1.6 5.6Zm-2.75 0h18.5");
}

.dybz68bdl {
  d: path("m10.25 16.5l1.75-.955l1.75.955");
}

.kfwa6xbwu {
  cx: 7.5px;
  cy: 17px;
  r: 2.75px;
}

.vbab6sb8q {
  cx: 16.5px;
  cy: 17px;
  r: 2.75px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="b9b69mpzu"/><circle class="kfwa6xbwu"/><circle class="vbab6sb8q"/><path class="dybz68bdl"/></g>`,
		"fallback": "iconoven:incognito-sharp",
	});
}

export default Component;
