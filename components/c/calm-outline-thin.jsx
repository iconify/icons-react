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
		"content": `<style>.fqgwxackw {
  d: path("M12 4c5 0 8 3 8 8 -5 0 -8 -3 -8 -8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l8dn9jbyp {
  d: path("M2 15h20");
}

.olqfcgidt {
  d: path("M6 19h12");
}
</style><g class="hntgybcog"><path class="l8dn9jbyp"/><path class="olqfcgidt"/><path class="fqgwxackw"/></g>`,
		"fallback": "iconmind:calm-outline-thin",
	});
}

export default Component;
