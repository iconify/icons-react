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
		"content": `<style>.czw71esur {
  d: path("M6.5 11v2m3-4v6m3-5v4m3-5v6m3-4v2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o2tws2j4q {
  width: 18.5px;
  height: 12px;
  x: 2.75px;
  y: 6px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="o2tws2j4q"/><path class="czw71esur"/></g>`,
		"fallback": "iconoven:audio-track-mute",
	});
}

export default Component;
