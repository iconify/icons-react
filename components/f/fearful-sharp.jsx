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
		"content": `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.dzf8fh4so {
  d: path("M9.5 4.5v2M12 4.25v2m2.5-1.75v2");
}

.hv7t5-70z {
  cx: 15px;
  cy: 10.5px;
  r: 1.25px;
}

.i2w7l1bsp {
  cx: 9px;
  cy: 10.5px;
  r: 1.25px;
}

.usbadzy3d {
  cx: 12px;
  cy: 16px;
  r: 1.75px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><path class="dzf8fh4so"/><circle class="i2w7l1bsp"/><circle class="hv7t5-70z"/><circle class="usbadzy3d"/></g>`,
		"fallback": "iconoven:fearful-sharp",
	});
}

export default Component;
