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

.j097ke_6j {
  d: path("M12 11.5v-5M12 9q-1.14-4.28-5.5-3.5Q7.64 9.78 12 9m0-1.5q4.65.07 5.5-4.5q-4.65-.07-5.5 4.5");
}

.jkggtjskl {
  width: 18.5px;
  height: 9.75px;
  x: 2.75px;
  y: 11.5px;
  rx: 1.5px;
}

.wevoy64pr {
  d: path("M7 16.5c1.75-2 4.75-2 6.5 0c-1.75 2-4.75 2-6.5 0m6.5 0l2.5-1.75v3.5Z");
}
</style><g class="hntgybcog"><path class="j097ke_6j"/><rect class="jkggtjskl"/><path class="wevoy64pr"/></g>`,
		"fallback": "iconoven:aquaponics",
	});
}

export default Component;
