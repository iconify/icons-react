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

.l8dn9jbyp {
  d: path("M2 15h20");
}

.olqfcgidt {
  d: path("M6 19h12");
}

.s0kxqdbiw {
  d: path("M2 15a10 6 0 0 1 20 0");
}
</style><g class="hntgybcog"><path class="s0kxqdbiw"/><path class="l8dn9jbyp"/><path class="olqfcgidt"/></g>`,
		"fallback": "iconmind:dune-outline-thin",
	});
}

export default Component;
