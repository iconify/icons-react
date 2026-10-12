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
		"content": `<style>.sdkszkbdc {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.75 7.75h.01m8.49 0h.01m-8.51 8.5h.01m8.49 0h.01M12 12h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.z500fl9gy {
  width: 17.5px;
  height: 17.5px;
  x: 3.25px;
  y: 3.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 3px;
}
</style><g class="y9tr6bcfx"><rect class="z500fl9gy"/><path class="sdkszkbdc"/></g>`,
		"fallback": "iconoven:dice",
	});
}

export default Component;
