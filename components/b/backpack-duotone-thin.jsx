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

.ky6vhkb9o {
  d: path("M9 2v2.5");
}

.ls6sunbjf {
  d: path("M6 21V9a6 6 0 0 1 12 0v12Z");
}

.q9rg3vk5x {
  d: path("M15 2v2.5");
}

.urfzt0bgl {
  fill: currentColor;
  d: path("M6 21V9a6 6 0 0 1 12 0v12Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.wlp3ibbib {
  d: path("M6 13h12");
}
</style><g class="hntgybcog"><path class="urfzt0bgl"/><path class="ls6sunbjf"/><path class="wlp3ibbib"/><path class="ky6vhkb9o"/><path class="q9rg3vk5x"/></g>`,
		"fallback": "iconmind:backpack-duotone-thin",
	});
}

export default Component;
