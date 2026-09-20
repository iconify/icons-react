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
		"content": `<style>.bfcwd7bcm {
  d: path("M13 13a4 4 0 0 1 8 0");
}

.e325robmt {
  d: path("M3 13a4 4 0 0 1 8 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.leijmjbkg {
  d: path("M18 13v6");
}

.v7ifz5bvw {
  d: path("M6 13v6");
}

.zugrvnb7t {
  d: path("M2 13h20");
}
</style><g class="hntgybcog"><path class="zugrvnb7t"/><path class="e325robmt"/><path class="bfcwd7bcm"/><path class="v7ifz5bvw"/><path class="leijmjbkg"/></g>`,
		"fallback": "iconmind:buffet-outline-thin",
	});
}

export default Component;
