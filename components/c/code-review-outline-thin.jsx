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
		"content": `<style>.aoorvnbzq {
  d: path("m14 7 4 4 -4 4");
}

.e-eh9i0mi {
  d: path("m9 19 2 2 4 -4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lrkxnckco {
  d: path("m8 7 -4 4 4 4");
}
</style><g class="hntgybcog"><path class="lrkxnckco"/><path class="aoorvnbzq"/><path class="e-eh9i0mi"/></g>`,
		"fallback": "iconmind:code-review-outline-thin",
	});
}

export default Component;
