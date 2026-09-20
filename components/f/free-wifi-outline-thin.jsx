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

.jfhg8zbol {
  d: path("M3.54 13.92a9 9 0 0 1 16.92 0");
}

.jlojnsdlu {
  d: path("M11 18a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.ooyv_6epc {
  d: path("M7.77 15.46a4.5 4.5 0 0 1 8.46 0");
}
</style><g class="hntgybcog"><path class="ooyv_6epc"/><path class="jfhg8zbol"/><path class="jlojnsdlu"/></g>`,
		"fallback": "iconmind:free-wifi-outline-thin",
	});
}

export default Component;
