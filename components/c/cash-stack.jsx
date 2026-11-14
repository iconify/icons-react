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
		"content": `<style>.acr344kyw {
  d: path("M8 13.75a2.5 1.75 0 1 0 5 0a2.5 1.75 0 1 0-5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.shrm2vb9w {
  d: path("M5.5 9.25v-2A1.5 1.5 0 0 1 7 5.75h13a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-1.5");
}

.vk2ylcbin {
  d: path("M5.125 9.25h10.75a2.625 2.625 0 0 1 2.625 2.625v3.75a2.625 2.625 0 0 1-2.625 2.625H5.125A2.625 2.625 0 0 1 2.5 15.625v-3.75A2.625 2.625 0 0 1 5.125 9.25");
}
</style><g class="hntgybcog"><path class="vk2ylcbin"/><path class="acr344kyw"/><path class="shrm2vb9w"/></g>`,
		"fallback": "uix:cash-stack",
	});
}

export default Component;
