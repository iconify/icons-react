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
		"content": `<style>.ez3jnsx3c {
  d: path("M16.5 16.5h1.75M20 15l1.25-1M20 18l1.25 1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oi57-v-ta {
  d: path("M8.5 9a2 2 0 0 0 0 4a3.75 3.75 0 0 0 0-7.5a5.5 5.5 0 0 0 0 11h4");
}

.t_xn1jbnr {
  width: 4px;
  height: 3.5px;
  x: 12.5px;
  y: 14.75px;
  rx: 1px;
}
</style><g class="hntgybcog"><path class="oi57-v-ta"/><rect class="t_xn1jbnr"/><path class="ez3jnsx3c"/></g>`,
		"fallback": "iconoven:garden-hose",
	});
}

export default Component;
