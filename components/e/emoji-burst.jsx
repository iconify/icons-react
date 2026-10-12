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
		"content": `<style>.ktufmabdh {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.75 11.75h.01m5.49 0h.01");
}

.v5x_aacpn {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 15.5a4 4 0 0 0 6.5 0m5.5-12.75v4m-2-2h4");
}

.y3nhvudao {
  cx: 10.5px;
  cy: 13.5px;
  r: 7.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle class="y3nhvudao"/><path class="ktufmabdh"/><path class="v5x_aacpn"/></g>`,
		"fallback": "iconoven:emoji-burst",
	});
}

export default Component;
