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
		"content": `<style>.c-pcdbceg {
  d: path("M4 14a4 4 0 0 1 2 -7.5A5 5 0 0 1 15.5 5a5.5 5.5 0 0 1 4.5 9Z");
}

.hbb998bpi {
  d: path("m14 16 2.5 2.5a2.5 2.5 0 0 1 -5 0Z");
}

.hn-9k3ndx {
  d: path("m8 16 2.5 2.5a2.5 2.5 0 0 1 -5 0Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r7ao24n4h {
  d: path("M4 22h16");
}
</style><g class="hntgybcog"><path class="c-pcdbceg"/><path class="hn-9k3ndx"/><path class="hbb998bpi"/><path class="r7ao24n4h"/></g>`,
		"fallback": "iconmind:freezing-rain-outline-thin",
	});
}

export default Component;
