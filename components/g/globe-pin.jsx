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
		"content": `<style>.gy7rnxzfe {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 5.5h.01");
}

.nu67jdbdh {
  cx: 12px;
  cy: 15.75px;
  r: 5.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.um3_xcbbt {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 15.75h11m-5.5-5.5c-1.5 1.5-2.25 3.5-2.25 5.5s.75 4 2.25 5.5c1.5-1.5 2.25-3.5 2.25-5.5s-.75-4-2.25-5.5m0 0c-1.85-1.6-2.75-3-2.75-4.75a2.75 2.75 0 0 1 5.5 0c0 1.75-.9 3.15-2.75 4.75");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle class="nu67jdbdh"/><path class="um3_xcbbt"/><path class="gy7rnxzfe"/></g>`,
		"fallback": "iconoven:globe-pin",
	});
}

export default Component;
