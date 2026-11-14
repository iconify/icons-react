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

.iw5cr1mws {
  d: path("m13.995 6.823l2.828-2.828a2.25 2.25 0 0 1 3.182 0a2.25 2.25 0 0 1 0 3.182l-2.828 2.828a2.25 2.25 0 0 1-3.182 0a2.25 2.25 0 0 1 0-3.182");
}

.m4ga1lxem {
  d: path("m8.995 11.823l2.828-2.828a2.25 2.25 0 0 1 3.182 0a2.25 2.25 0 0 1 0 3.182l-2.828 2.828a2.25 2.25 0 0 1-3.182 0a2.25 2.25 0 0 1 0-3.182");
}

.xhrzxacyk {
  d: path("m3.995 16.823l2.828-2.828a2.25 2.25 0 0 1 3.182 0a2.25 2.25 0 0 1 0 3.182l-2.828 2.828a2.25 2.25 0 0 1-3.182 0a2.25 2.25 0 0 1 0-3.182");
}
</style><g class="hntgybcog"><path class="xhrzxacyk"/><path class="m4ga1lxem"/><path class="iw5cr1mws"/></g>`,
		"fallback": "uix:attack-chain",
	});
}

export default Component;
