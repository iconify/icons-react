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
		"content": `<style>.iqwh2rb3o {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 4.75a2 2 0 0 1 2-2h8.5a2 2 0 0 1 2 2V10a2 2 0 0 0 0 4v5.25a2 2 0 0 1-2 2h-8.5a2 2 0 0 1-2-2V14a2 2 0 0 0 0-4ZM12 7v5.5");
}

.tb6q2fbtf {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 15.75h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="iqwh2rb3o"/><path class="tb6q2fbtf"/></g>`,
		"fallback": "iconoven:fine-ticket",
	});
}

export default Component;
