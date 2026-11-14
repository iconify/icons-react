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
		"content": `<style>.bo6p11gje {
  d: path("M12.5 13.25V5.5A2.5 2.5 0 0 1 15 3h2.5A2.5 2.5 0 0 1 20 5.5V14");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x5dxxmqqz {
  d: path("M4.5 13q3-1.5 6 0t6 0");
}

.xpclw3b8l {
  d: path("M3 7h1.5v12.5A1.5 1.5 0 0 0 6 21h9a1.5 1.5 0 0 0 1.5-1.5V7");
}
</style><g class="hntgybcog"><path class="xpclw3b8l"/><path class="x5dxxmqqz"/><path class="bo6p11gje"/></g>`,
		"fallback": "uix:fabric-dyeing-vat",
	});
}

export default Component;
