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
		"content": `<style>.cy79q0bdu {
  d: path("m13.061 11.646l.707.708a1.5 1.5 0 0 1 0 2.121l-.707.707a1.5 1.5 0 0 1-2.122 0l-.707-.707a1.5 1.5 0 0 1 0-2.121l.707-.708a1.5 1.5 0 0 1 2.122 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k04-d6bie {
  d: path("M5.625 5h5.288a2.63 2.63 0 0 1 1.856.769l6.375 6.375a2.625 2.625 0 0 1 0 3.712L15.68 19.32a2.625 2.625 0 0 1-3.519.176l-8.198-6.708A2.63 2.63 0 0 1 3 10.756V7.625A2.625 2.625 0 0 1 5.625 5M7.5 9.5h.01");
}
</style><g class="hntgybcog"><path class="k04-d6bie"/><path class="cy79q0bdu"/></g>`,
		"fallback": "uix:device-asset-tag",
	});
}

export default Component;
