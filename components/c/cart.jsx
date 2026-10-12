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
		"content": `<style>.fpq61538s {
  cx: 9.25px;
  cy: 18.75px;
  r: 1.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l61j1qbza {
  d: path("M2.75 3.75h1.4A1.5 1.5 0 0 1 5.61 4.9L7.65 14m-1.7-7.75H19.5a1 1 0 0 1 .97 1.24l-1.2 4.8A2 2 0 0 1 17.33 14H7.65Z");
}

.vzw8i56kn {
  cx: 17.25px;
  cy: 18.75px;
  r: 1.5px;
}
</style><g class="hntgybcog"><path class="l61j1qbza"/><circle class="fpq61538s"/><circle class="vzw8i56kn"/></g>`,
		"fallback": "iconoven:cart",
	});
}

export default Component;
