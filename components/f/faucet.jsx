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
		"content": `<style>.aiaavobpr {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 8.75h10.5a4.5 4.5 0 0 1 4.5 4.5V15h-4v-1.75a.75.75 0 0 0-.75-.75H2.75Zm5.25 0v-3.5m-2.5 0h5");
}

.t92aii9xn {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15.75 19.5h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="aiaavobpr"/><path class="t92aii9xn"/></g>`,
		"fallback": "iconoven:faucet",
	});
}

export default Component;
