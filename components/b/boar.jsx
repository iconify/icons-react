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
		"content": `<style>.f6u54sblz {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 12.75V11.5l3.75-2c1-2.75 3-4.5 5.75-5l1-1.5l1 1.5l1-1.25l.85 1.5c2.9 1 4.9 4 4.9 8v7.5h-2.5v-3h-7v3H9v-4c-2.5-.5-4.5-1.75-5.75-2.5c-.3-.2-.5-.6-.5-1");
}

.i8-nhxfwt {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 13.25C5 12 5.5 11 6.75 10.5");
}

.qj72olbzi {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.25 9.5h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="f6u54sblz"/><path class="i8-nhxfwt"/><path class="qj72olbzi"/></g>`,
		"fallback": "iconoven:boar",
	});
}

export default Component;
